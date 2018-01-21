import * as THREE from 'three'
import { groundToGlobal } from '../common/helpers'

export default class Hover {
  constructor (params) {
    this.geometry = new THREE.PlaneBufferGeometry(100, 100)
    this.material = new THREE.MeshBasicMaterial({
      color: 0x3498db,
      side: THREE.DoubleSide,
      opacity: 0.4,
      transparent: true
    })
    this.root = new THREE.Mesh(this.geometry, this.material)
    this.root.position.z = 5.5
    this.setPosition(params)
  }

  setPosition (pos) {
    this.root.position.x = groundToGlobal(pos[0])
    this.root.position.y = groundToGlobal(pos[1])
    // console.log(this.root)
  }
}