import * as THREE from 'three'

const lsr = new THREE.ConeBufferGeometry(30, 30, 32)
const cnn = new THREE.CylinderBufferGeometry(30, 50, 30)
const material = new THREE.MeshBasicMaterial({ color: 0xf1c40f })

export default { lsr: new THREE.Mesh(lsr, material), cnn: new THREE.Mesh(cnn, material) }
