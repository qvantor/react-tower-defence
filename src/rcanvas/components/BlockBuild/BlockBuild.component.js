import * as THREE from 'three'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { graphToGlobal } from 'rcanvas/common/helpers'
import { checkBlockPos } from 'reducers/graph/graph.actions'

class BlockBuild extends Component {
  render () {
    const { blockBuild, hover, square, depth, blocks } = this.props

    if (!blockBuild) return null
    const color = checkBlockPos(hover) ? 0x2ecc71 : 0xe74c3c
    const material = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: .7 })

    return (
      <boxBuffer
        width={square}
        height={square}
        depth={depth}
        material={material}
        position={[graphToGlobal(hover[0]), graphToGlobal(hover[1]), depth / 2]} />
    )
  }
}

const mapStateToProps = state => {
  return {
    square: state.config.field.square,
    depth: state.config.field.depth,
    blockBuild: state.game.blockBuild,
    hover: state.graph.hover,
    blocks: state.graph.blocks
  }
}
export default connect(mapStateToProps)(BlockBuild)