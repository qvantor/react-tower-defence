import MainLoop from 'mainloop.js'
import { take, fork, put, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { store } from 'store'

import { graphToGlobal } from 'rcanvas/common/helpers'

import { setEnemyPosition } from 'reducers/game/game.actions'
import { getEnemyPos } from 'reducers/graph/graph.actions'

import * as gameConst from 'reducers/game/game.constants'

const loop = MainLoop
  .setUpdate(e => {
    const { game: { activeEnemies, weapons } } = store.getState()
    // if (activeEnemies.length === 0) store.dispatch({ type: progressConst.WAVE_ENDED })
    const positions = activeEnemies.map(item => item.position + item.speed / 1000)
    const globalPositions = positions.map(item => getEnemyPos(item))

    weapons.forEach(({ weapon, position }) => {
      const wGlobPos = [graphToGlobal(position[0]), graphToGlobal(position[1])]

      globalPositions.forEach(enemyPos => {
        const distance = Math.sqrt(Math.pow(enemyPos[0] - wGlobPos[0], 2) + Math.pow(enemyPos[1] - wGlobPos[1], 2))
        console.log(distance)

        if (distance < weapon.radius) {

        }
      })
    })

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