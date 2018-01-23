import React, { Component } from 'react'
import * as THREE from 'three'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const geometry = new THREE.SphereBufferGeometry(7, 32, 32)
const material = new THREE.MeshBasicMaterial({ color: 0xff4d4d })
const mesh = new THREE.Mesh(geometry, material)

class Enemies extends Component {
  static propTypes = {}

  render () {
    const { enemies, enemiesModels } = this.props

    return (<group>
      {enemies.map((item, i) =>
        <boxBuffer
          key={item.id}
          material={material}
          width={15}
          height={15}
          depth={15}
          position={[Math.sin(item.position) * 450, Math.cos(item.position) * 450, Math.sin(i) * 100 + (i*3)]} />)}
    </group>)
  }
}

const mapStateToProps = state => {
  return {
    enemies: state.progress.activeEnemies,
    enemiesModels: state.enemies.list
  }
}
export default connect(mapStateToProps)(Enemies)