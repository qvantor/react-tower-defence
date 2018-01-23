import React from 'react'
import * as THREE from 'three'
import Component from '../objects/component'

export default class line extends Component {
  constructor (prop) {
    super(prop)
    this.generate()
  }

  generate () {
    const { vertices, material } = this.props
    this.geometry = new THREE.Geometry()
    this.material = material || new THREE.LineBasicMaterial({ color: 0xf7d794 })
    vertices.forEach(item => this.geometry.vertices.push(new THREE.Vector3(item[0], item[1], item[2])))

    if (this.root) {
      this.root.geometry.dispose()
      this.root.geometry = this.geometry
      this.root.material = this.material
    } else {
      this.root = new THREE.Line(this.geometry, this.material)
    }
  }

  updateProps () {
    this.generate()
  }
}