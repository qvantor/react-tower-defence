import React from 'react'
import Component from '../objects/component'
import * as THREE from 'three'

export default class gridHelper extends Component {
  constructor (prop) {
    super(prop)
    this.root = new THREE.Group()
    this.generate()
  }

  generate () {
    const { size, divisions } = this.props
    this.root.children = []
    this.root.add(new THREE.GridHelper(size, divisions))
  }

  updateProps () {
    this.generate()
  }
}