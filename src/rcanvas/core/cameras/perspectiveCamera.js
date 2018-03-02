import React from 'react'
import Component from '../objects/component'
import * as THREE from 'three'

export default class perspectiveCamera extends Component {
  constructor (prop) {
    super(prop)
    const { name, fov, aspect, near, far } = prop
    this.root = new THREE.PerspectiveCamera(fov, aspect, near, far)
    this.root.name = name
  }
}
