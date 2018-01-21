import * as THREE from 'three'
import TrackballControls from './modules/trackballControls'
import './common/raycasting'
import './common/mouseClick'

export const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 100000)
camera.position.z = 200
export const scene = new THREE.Scene()
export const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
export const controls = new TrackballControls(camera)
export const canvas = document.getElementById('canvas')

export const raycaster = new THREE.Raycaster()
export const mouse = new THREE.Vector2()

window.onload = e => {
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  canvas.appendChild(renderer.domElement)
  animate()
}

function animate () {
  renderer.render(scene, camera)
  raycaster.setFromCamera(mouse, camera)
  controls.update()
  requestAnimationFrame(animate)
}