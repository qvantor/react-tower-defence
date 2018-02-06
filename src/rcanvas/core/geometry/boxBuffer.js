import React from 'react'
import Component from '../objects/component'
import * as THREE from 'three'

export default class boxBuffer extends Component {
  constructor (prop) {
    super(prop)
    this.generate()
  }

  generate () {
    const { width, height, depth, widthSegments, heightSegments, depthSegments, material } = this.props
    this.geometry = new THREE.BoxBufferGeometry(width, height, depth, widthSegments, heightSegments, depthSegments)
    this.material = material || new THREE.MeshBasicMaterial({ color: 0x3498db })

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
