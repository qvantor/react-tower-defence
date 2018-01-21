import * as THREE from 'three'
import { groundToGlobal } from '../common/helpers'

export default class Path {
  constructor (params) {
    this.geometry = new THREE.Geometry()
    this.material = new THREE.LineBasicMaterial({ color: 0x0000ff, opacity: 0.5, transparent: true })
    params.forEach(item =>
      this.geometry.vertices.push(new THREE.Vector3(groundToGlobal(item[0]), groundToGlobal(item[1]), 5)))
    this.root = new THREE.Line(this.geometry, this.material)
  }
}