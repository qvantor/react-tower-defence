import * as THREE from 'three'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { graphToGlobal } from '../../common/helpers'

// import { checkPosition } from 'reducers/graph/graph.actions'

class HoverHelper extends Component {
  render () {
    const { square, hover } = this.props

    // const color = checkPosition(hover) ? 0x2ecc71 : 0xe74c3c
    const material = new THREE.MeshBasicMaterial({ color: 0xecf0f1, transparent: true, opacity: .7 })

    return (<planeBuffer
      material={material}
      width={square}
      height={square}
      position={[graphToGlobal(hover[0]), graphToGlobal(hover[1]), 0]} />)
  }
}

const mapStateToProps = state => ({
  square: state.config.field.square,
  hover: state.graph.hover
})

export default connect(mapStateToProps)(HoverHelper)
