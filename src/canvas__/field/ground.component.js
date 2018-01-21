import * as THREE from 'three'

import { groundToGlobal } from '../common/helpers'

export default class Ground {
  constructor (params) {
    this.root = new THREE.Group()
    const fSquare = 100 //@todo replace with config param
    const { field, portal, gate } = params
    this.ground = {
      geometry: new THREE.BoxBufferGeometry(field[0] * fSquare, field[1] * fSquare, fSquare * 0.1),
      material: new THREE.MeshBasicMaterial({ color: 0x2ecc71 })
    }
    this.root.add(new THREE.Mesh(this.ground.geometry, this.ground.material))
    this.helper = new THREE.GridHelper(field[0] * fSquare, field[0] * fSquare / fSquare)
    this.helper.rotation.copy(new THREE.Euler(THREE.Math.degToRad(90), THREE.Math.degToRad(0), THREE.Math.degToRad(0)))
    this.helper.position.z = (fSquare * 0.1 / 2) + 0.2
    this.root.add(this.helper)

    this.portal = new THREE.Mesh(new THREE.BoxBufferGeometry(100, 100, 10),
      new THREE.MeshBasicMaterial({ color: 0x000000 }))
    this.portal.position.z = (fSquare * 0.1 / 2)
    this.portal.position.x = groundToGlobal(portal[0])
    this.portal.position.y = groundToGlobal(portal[1])
    this.root.add(this.portal)

    this.gate = new THREE.Mesh(new THREE.BoxBufferGeometry(100, 100, 10),
      new THREE.MeshBasicMaterial({ color: 0x0000ff }))
    this.gate.position.z = (fSquare * 0.1 / 2)
    this.gate.position.x = groundToGlobal(gate[0])
    this.gate.position.y = groundToGlobal(gate[1])
    this.root.add(this.gate)
  }
}