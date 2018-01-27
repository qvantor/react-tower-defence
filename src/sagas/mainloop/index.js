import MainLoop from 'mainloop.js'
import { take, fork, put, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import * as progressConst from 'reducers/progress/progress.constants'
import * as gameConst from 'reducers/game/game.constants'
import { store } from 'store/'
import { setEnemyPosition, enemyPassed } from 'reducers/game/game.actions'

const loop = MainLoop
  .setUpdate(e => {
    const { game: { activeEnemies } } = store.getState()
    if (activeEnemies.length === 0) store.dispatch({ type: progressConst.WAVE_ENDED })
    const positions = activeEnemies.map(item => item.position + item.speed / 1000)
    setEnemyPosition(positions)
    activeEnemies.forEach(item => item.position >= 1 && enemyPassed(item.id, item.damage))
  })

function* addEnemies () {
  const waves = yield select(({ waves, progress }) => waves.list.find(wave => wave.id === progress.wave))
  const enemies = yield select(({ enemies }) =>
    waves.enemies.map(item => enemies.list.find(enemy => enemy.id === item.enemyId)))

  for (let i = 0; i < waves.enemies.length; i++) {
    const wave = waves.enemies[i]
    const enemy = enemies[i]

    for (let j = 1; j <= wave.count; j++) {
      yield put({
        type: gameConst.ENEMY_SPAWNED, payload: {
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
    yield take(progressConst.WAVE_STARTED)
    yield fork(addEnemies)
    loop.start()
    yield take(progressConst.WAVE_ENDED)
    loop.stop()
  }
}