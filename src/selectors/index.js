import { createSelector } from 'reselect'
import { store } from 'store/'

const levels = state.levels.list
const level = state.progess.level

const currentLevel = createSelector(
  levels, level,
  (levels, level) => levels.find(item => item.id === level)
)

export const getCurrentLevel = () => currentLevel(store.getState())