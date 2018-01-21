import React from 'react'
import Component from './component'
import * as THREE from 'three'

export default class group extends Component {
  constructor (prop) {
    super(prop)
    this.root = new THREE.Group()
  }
}