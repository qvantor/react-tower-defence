import React, { Component } from 'react'
import { connect } from 'react-redux'
import planeBuffer from '../../core/geometry/planeBuffer'
import * as THREE from 'three'

class Grid extends Component {
  render () {
    const { square, level } = this.props
    const x = Math.abs(level.x.from) + Math.abs(level.x.to) + 1
    const y = Math.abs(level.y.from) + Math.abs(level.y.to) + 1
    const material = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 })

    return (
      <group>
        <gridHelper
          size={x * square}
          divisions={x * square / square}
          rotation={[90, 0, 0]} />
        <planeBuffer
          position={[0, 0, -0.1]}
          material={material}
          width={x * square}
          height={y * square} />
      </group>
    )
  }
}

const mapStateToProps = state => {
  return {
    level: state.levels.find(item => item.id === state.progress.level).field,
    square: state.config.field.square
  }
}
export default connect(mapStateToProps)(Grid)