import * as THREE from 'three'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { graphToGlobal } from '../common/helpers'

class HoverHelper extends Component {
  static propTypes = {
    hover: PropTypes.array.isRequired
  }

  render () {
    const { hover } = this.props
    const material = new THREE.MeshBasicMaterial({ color: 0x2ecc71, transparent: true, opacity: .7 })

    return (<planeBuffer
      material={material}
      width={100}
      height={100}
      position={[graphToGlobal(hover[0]), graphToGlobal(hover[1]), (100 * 0.1 / 2) + 0.2]} />)
  }
}

const mapStateToProps = state => ({
  hover: state.graph.hover
})

export default connect(mapStateToProps)(HoverHelper)