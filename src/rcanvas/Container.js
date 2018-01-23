import * as THREE from 'three'
import Stats from 'stats.js'
import Events from './modules/Events'

import TrackballControls from './modules/trackballControls'

export default class Container extends Events {
  constructor (canvas) {
    super(canvas)
    this.canvas = canvas
    this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 100000)
    this.scene = new THREE.Scene()
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.canvas.appendChild(this.renderer.domElement)
    this.camera.position.z = 1000
    this.controls = new TrackballControls(this.camera)

    this.stats = new Stats()
    this.canvas.appendChild(this.stats.dom)
    this.animate()
  }

  animate = () => {
    this.stats.begin()
    this.renderer.render(this.scene, this.camera)
    this.controls.update()
    this.stats.end()
    requestAnimationFrame(this.animate)
  }

  // Add a child to the end of existing list of children
  appendChild (child, parent) {
    // console.log('appendChild', child)
    this.scene.add(child.root)
  }

  // Remove a child from the list of children
  removeChild (child) {
    this.scene.remove(child.root)
  }

  // Insert a child before another child in the list of children
  insertBefore (child, childBefore) {
    // child.parent = this
    console.log(child, childBefore)
    // this.children.splice(this.children.indexOf(childBefore), 0, child)
    // this.invalidate()
  }

  // The rendering context of the canvas is used for drawing
  // getRenderingContext2D () {
  //   return this.canvas.getContext('2d')
  // }

  // This method will be called multiple times for each children
  // To avoid unnecessary redraws, we batch updates with requestAnimationFrame
  // invalidate () {
  //   // Cancel any scheduled redraws
  //   cancelAnimationFrame(this.update)
  //
  //   // Schedule a redraw
  //   this.update = requestAnimationFrame(() => {
  //     // Before drawing new content, we need to clear the whole canvas
  //     this.getRenderingContext2D().clearRect(
  //       0,
  //       0,
  //       this.canvas.width,
  //       this.canvas.height
  //     )
  //
  //     // Go through all the children and draw them
  //     this.children.forEach(child => child.draw())
  //   })
  // }

}