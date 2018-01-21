import * as THREE from 'three'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { graphToGlobal } from '../../common/helpers'

class HoverHelper extends Component {
  static propTypes = {
    square: PropTypes.number.isRequired,
    hover: PropTypes.array.isRequired
  }

  render () {
    const { square, hover } = this.props

    const material = new THREE.MeshBasicMaterial({ color: 0x0000ff, transparent: true, opacity: .5 })

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