import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Building from '../Buildings/Building.component'

import { graphToGlobal } from '../../common/helpers'

class ToBuild extends Component {
  static propTypes = {
    toBuild: PropTypes.string,
    hover: PropTypes.array.isRequired
  }

  render () {
    const { toBuild, hover } = this.props

    if (!toBuild) return null

    return (<Building
      buildingId={toBuild}
      showRadius={true}
      position={[graphToGlobal(hover[0]), graphToGlobal(hover[1]), 30]}
      rotation={[90, 0, 0]} />)
  }
}

const mapStateToProps = state => {
  return {
    toBuild: state.player.toBuild,
    hover: state.graph.hover
  }
}
export default connect(mapStateToProps)(ToBuild)