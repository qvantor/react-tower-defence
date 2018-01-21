import * as THREE from 'three'

const geometry = new THREE.ConeBufferGeometry(30, 50, 32)
const cannon = new THREE.CylinderBufferGeometry(20, 30, 64)
const material = new THREE.MeshBasicMaterial({ color: 0x2ecc71 })
const cone = new THREE.Mesh(geometry, material)

export default {
  list: [
    {
      id: 'lsr',
      name: 'Laser',
      model: cone,
      price: 50,
      radius: 100
    },
    {
      id: 'cnn',
      name: 'Cannon',
      model: new THREE.Mesh(cannon, material),
      price: 100,
      radius: 70
    }
  ]
}