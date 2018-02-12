import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as THREE from 'three'

import { getEnemyPos } from 'reducers/graph/graph.actions'

const geometry = new THREE.SphereBufferGeometry(7, 32, 32)
const material = new THREE.MeshBasicMaterial({ color: 0x9c88ff })
const mesh = new THREE.Mesh(geometry, material)

class Enemies extends Component {
  render () {
    const { enemies } = this.props

    return (
      <group>
        {enemies.map((item, i) =>
          <mesh
            key={item.id}
            mesh={mesh}
            position={getEnemyPos(item.position)} />)}
      </group>
    )
  }
}

const mapStateToProps = state => {
  return {
    enemies: state.game.activeEnemies
  }
}
export default connect(mapStateToProps)(Enemies)