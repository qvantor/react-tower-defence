import * as THREE from 'three'

import Ground from './ground.component'

export default class Field {
  constructor (params) {
    this.root = new THREE.Group()
    this.root.add(new Ground(params).root)
  }
}