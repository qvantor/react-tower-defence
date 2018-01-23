import MainLoop from 'mainloop.js'
import { take, fork, put, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import * as progressConst from 'reducers/progress/progress.constants'
import { store } from 'store/'
import { setEnemyPosition } from 'reducers/progress/progress.actions'

const loop = MainLoop
  .setMaxAllowedFPS(50)
  .setDraw(e => {
    const { progress: { activeEnemies } } = store.getState()
    const positions = activeEnemies.map(item => item.position + (item.speed / 100))
    setEnemyPosition(positions)
  })

function* addEnemies () {
  const waves = yield select(({ waves, progress }) => waves.list.find(wave => wave.id === progress.wave))
  const enemies = yield select(({ enemies }) =>
    waves.enemies.map(item => enemies.list.find(enemy => enemy.id === item.enemyId)))
  console.log(waves, enemies)
  for (let i = 0; i < waves.enemies.length; i++) {
    const wave = waves.enemies[i]
    const enemy = enemies[i]
    console.log(enemy, wave)
    for (let j = 1; j <= wave.count; j++) {
      yield put({
        type: progressConst.ENEMY_SPAWNED, payload: {
          id: `${i}${j}`,
          enemy: enemy.id,
          hp: enemy.hp,
          speed: enemy.speed,
          position: 0
        }
      })
      yield delay(wave.appear)
    }
  }
}

function* enemiesPosition () {
}

export default function* () {
  while (true) {
    yield take(progressConst.WAVE_STARTED)
    yield fork(addEnemies)
    loop.start()
    yield take(progressConst.WAVE_ENDED)
    loop.end()
  }
}