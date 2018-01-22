import * as THREE from 'three'
import Immutable from 'seamless-immutable'

const geometry = new THREE.SphereBufferGeometry(5, 32, 32)
const material = new THREE.MeshBasicMaterial({ color: 0xffffff })
const m1 = new THREE.Mesh(geometry, material)

export default Immutable({
  list: [{
    id: 1,
    name: 'Monster #1',
    model: m1,
    speed: 2,
    hp: 100
  }]
})