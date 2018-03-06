import React from 'react'
import Component from './component'
import Stats from 'stats.js'
import * as THREE from 'three'

import TrackballControls from '../../modules/trackballControls'

export default class scene extends Component {
  constructor (prop) {
    super(prop)
    this.root = new THREE.Scene()
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.stats = new Stats()
  }

  initialize = (parent) => {
    this.parent = parent
    parent.canvas.appendChild(this.renderer.domElement)
    parent.canvas.appendChild(this.stats.dom)

    window.addEventListener('resize', this.onResize)

    this.setCamera()
    setTimeout(this.onResize, 1)
    this.animate()
  }

  updateProps (nextProps, prevProps) {
    if (prevProps.camera !== nextProps.camera) {
      this.setCamera()
    }
  }

  onResize = () => {
    this.camera.aspect = this.parent.canvas.offsetWidth / this.parent.canvas.offsetHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(this.parent.canvas.offsetWidth, this.parent.canvas.offsetHeight)
  }

  setCamera () {
    const newCamera = this.root.getObjectByName(this.props.camera)
    if (newCamera && newCamera.isCamera) {
      this.camera = this.root.getObjectByName(this.props.camera)
    } else {
      this.camera = new THREE.PerspectiveCamera()
    }
    this.camera.aspect = this.parent.canvas.offsetWidth / this.parent.canvas.offsetHeight
    this.camera.updateProjectionMatrix()
    this.controls = new TrackballControls(this.camera, this.parent.canvas)
  }

  animate = () => {
    requestAnimationFrame(this.animate)
    this.stats.begin()
    this.renderer.render(this.root, this.camera)
    this.controls.update()
    this.stats.end()
  }
}
