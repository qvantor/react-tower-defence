import React from 'react'
import * as THREE from 'three'

import Component from '../objects/component'
import Noise from 'rcanvas/common/perlin'

function generateNoise (x, y, smooth) {
  const noise = []
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      noise.push(Noise.perlin3(i / smooth, j / smooth, 0))
    }
  }
  return noise
}

export default class terrain extends Component {
  constructor (prop) {
    super(prop)
    this.generate()
  }

  generate () {
    const { width, height, material, smooth = 10, detalization = 200, extremum = 1 } = this.props
    const widthSize = width / detalization
    const heightSize = height / detalization
    this.geometry = new THREE.PlaneBufferGeometry(width, height, widthSize - 1, heightSize - 1)
    this.material = material || new THREE.MeshBasicMaterial({
      color: 0x2ecc71,
      wireframe: true
      // transparent: true,
      // opacity: 0.4,
      // side: THREE.DoubleSide
    })

    const noise = generateNoise(widthSize, heightSize, smooth)
    const vertices = this.geometry.attributes.position.array
    for (let i = 0, j = 2, l = vertices.length / 3; i < l; i++, j += 3) {
      let z = noise[i] * ((width + height) / 20) * extremum
      vertices[j] = z
    }
    this.geometry.computeFaceNormals()

    if (this.root) {
      this.root.geometry.dispose()
      this.root.geometry = this.geometry
      this.root.material = this.material
    } else {
      this.root = new THREE.Mesh(this.geometry, this.material)
    }
  }

  updateProps () {
    this.generate()
  }
}