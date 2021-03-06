import * as THREE from 'three'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { graphToGlobal } from 'rcanvas/common/helpers'

class Gate extends Component {
  static propTypes = {
    square: PropTypes.number.isRequired,
    position: PropTypes.array.isRequired
  }

  render () {
    const { square, position } = this.props
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })

    return (<planeBuffer
      material={material}
      width={square}
      height={square}
      position={[graphToGlobal(position[0]), graphToGlobal(position[1]), (square * 0.1 / 2) + 0.2]} />)
  }
}

const mapStateToProps = state => ({
  square: state.config.field.square,
  position: state.levels.list.find(item => item.id === state.progress.level).gate
})

export default connect(mapStateToProps)(Gate)