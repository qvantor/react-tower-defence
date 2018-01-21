import { store } from '../../store/index'
import { groundToGlobal } from '../common/helpers'

export default class ToBuild {
  constructor (params) {
    const { buildings } = store.getState()
    const building = buildings.list.find(item => item.id === params)
    this.root = building.model

    this.root.rotation.x = Math.PI / 2
    this.root.position.z = 30
  }

  setPosition (pos) {
    this.root.position.x = groundToGlobal(pos[0])
    this.root.position.y = groundToGlobal(pos[1])
  }
}