import React, { Component } from 'react'
import * as THREE from 'three'

const geometry = new THREE.SphereBufferGeometry(7, 32, 32)
const material = new THREE.MeshBasicMaterial({ color: 0x9c88ff })
const mesh = new THREE.Mesh(geometry, material)

class Enemy extends Component {

  shouldComponentUpdate () {
    return false
  }

  componentWillReceiveProps (nextProps) {
    this.refs.node.root.position.x = nextProps.position[0]
    this.refs.node.root.position.y = nextProps.position[1]
    this.refs.node.root.position.z = nextProps.position[2]
  }

  render () {
    const { position } = this.props

    return (<mesh
      ref='node'
      mesh={mesh}
      position={position} />)
  }
}

export default Enemy