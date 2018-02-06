import * as THREE from 'three'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { graphToGlobal } from 'rcanvas/common/helpers'

class Portal extends Component {
  static propTypes = {
    square: PropTypes.number.isRequired,
    position: PropTypes.array.isRequired
  }

  render () {
    const { square, position } = this.props
    const material = new THREE.MeshBasicMaterial({ color: 0xe74c3c })

    return (<planeBuffer
      material={material}
      width={square}
      height={square}
      position={[graphToGlobal(position[0]), graphToGlobal(position[1]), 0]} />)
  }
}

const mapStateToProps = state => ({
  square: state.config.field.square,
  position: state.levels.find(item => item.id === state.progress.level).portal
})

export default connect(mapStateToProps)(Portal)