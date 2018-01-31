import React, { Component } from 'react'
import { connect } from 'react-redux'

import { graphToGlobal } from '../../common/helpers'
import * as THREE from 'three'

class ToConstruct extends Component {
  render () {
    const { square, hover, toConstruct } = this.props

    if (!toConstruct) return null

    const material = new THREE.MeshBasicMaterial({ color: 0x6c5ce7 })

    return (
      <boxBuffer
        material={material}
        width={square}
        height={square}
        depth={square / 10}
        position={[graphToGlobal(hover[0]), graphToGlobal(hover[1]), square / 20]}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    toConstruct: state.player.toConstruct,
    square: state.config.field.square,
    hover: state.graph.hover
  }
}
export default connect(mapStateToProps)(ToConstruct)