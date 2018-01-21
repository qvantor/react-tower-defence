import React from 'react'
import Component from '../objects/component'
import * as THREE from 'three'

export default class planeBuffer extends Component {
  constructor (prop) {
    super(prop)
    this.generate()
  }

  generate () {
    const { width, height, widthSegments, heightSegments, material } = this.props
    this.geometry = new THREE.PlaneBufferGeometry(width, height, widthSegments, heightSegments)
    this.material = material || new THREE.MeshBasicMaterial({ color: 0x0000ff, side: THREE.DoubleSide })

    if (this.root) {
      this.root.geometry.dispose()
      this.root.geometry = this.geometry
      this.root.material = this.material
    } else {
      this.root = new THREE.Mesh(this.geometry, this.material)
    }
  }

  updateProps () {
    this.generate()
  }
}