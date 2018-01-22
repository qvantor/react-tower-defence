import * as THREE from 'three'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { graphToGlobal } from '../../common/helpers'

import { checkPosition } from 'reducers/graph/graph.actions'

class HoverHelper extends Component {
  static propTypes = {
    square: PropTypes.number.isRequired,
    hover: PropTypes.array.isRequired
  }

  render () {
    const { square, hover } = this.props

    const color = checkPosition(hover) ? 0x2ecc71 : 0xe74c3c
    const material = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: .7 })

    return (<planeBuffer
      material={material}
      width={square}
      height={square}
      position={[graphToGlobal(hover[0]), graphToGlobal(hover[1]), (square * 0.1 / 2) + 0.2]} />)
  }
}

const mapStateToProps = state => ({
  square: state.config.field.square,
  hover: state.graph.hover
})

export default connect(mapStateToProps)(HoverHelper)