import React from 'react'
import Component from './component'
import * as THREE from 'three'

export default class mesh extends Component {
  constructor (prop) {
    super(prop)
    this.updateProps()
  }

  updateProps () {
    if (!this.root)
      this.root = new THREE.Group()
    this.root.children = []
    this.root.add(this.props.mesh.clone())
  }
}