import MainLoop from 'mainloop.js'
import * as THREE from 'three'
import { take, fork, put, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { store } from 'store'

import { graphToGlobal } from 'rcanvas/common/helpers'

import { setEnemyPosition, changeWeapons } from 'reducers/game/game.actions'
import { getEnemyPos } from 'reducers/graph/graph.actions'
import { addBullet, moveBullets } from 'reducers/bullets/bullets.actions'

import * as gameConst from 'reducers/game/game.constants'

const loop = MainLoop
  .setUpdate(e => {
    const { game: { activeEnemies, weapons }, bullets } = store.getState()
    // if (activeEnemies.length === 0) store.dispatch({ type: progressConst.WAVE_ENDED })
    const positions = activeEnemies.map(item => item.position + item.speed / 1000)
    const globalPositions = positions.map(item => getEnemyPos(item))

    const wChanges = []

    weapons.forEach(({ weapon, position, overheat }) => {
      const wPos = new THREE.Vector2(graphToGlobal(position[0]), graphToGlobal(position[1]))
      const shooted = globalPositions.find(enemyPos => {
        const ePos = new THREE.Vector2(enemyPos[0], enemyPos[1])
        if (wPos.distanceTo(ePos) < weapon.radius) {
          addBullet({ id: Math.random(), position: 0, direction: { from: wPos, to: ePos } })
          wChanges.push({ id: weapon.id, data: { overheat: weapon.speed } })
          return true
        }
        return false
      })
      if (!shooted && overheat > e) {
        wChanges.push({ id: weapon.id, data: { overheat: overheat - (e * 100) } })
      }
    })
    if (wChanges.length !== 0)
      changeWeapons(wChanges)

    if (bullets.length !== 0)
      moveBullets(bullets.map(item => (item.position || 0) + 0.05))

    setEnemyPosition(positions)
    // activeEnemies.forEach(item => item.position >= 1 && enemyPassed(item.id, item.damage))
  })

function* addEnemies () {
  const waves = yield select(({ waves, progress }) => waves.find(wave => wave.id === progress.wave))
  const enemies = yield select(({ enemies }) =>
    waves.enemies.map(item => enemies.find(enemy => enemy.id === item.enemyId)))

  for (let i = 0; i < waves.enemies.length; i++) {
    const wave = waves.enemies[i]
    const enemy = enemies[i]

    for (let j = 1; j <= wave.count; j++) {
      yield put({
        type: gameConst.GAME_ENEMY_SPAWNED, payload: {
          id: `${i}${j}`,
          enemy: enemy.id,
          hp: enemy.hp,
          speed: enemy.speed,
          damage: enemy.damage,
          position: 0
        }
      })
      yield delay(wave.appear)
    }
  }
}

export default function* () {
  while (true) {
    yield take(gameConst.GAME_WAVE_STARTED)
    yield fork(addEnemies)
    loop.start()
  }
}