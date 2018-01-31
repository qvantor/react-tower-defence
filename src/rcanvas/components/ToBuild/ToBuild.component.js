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
    const { toBuild, hover, constructions } = this.props
    const construct = constructions.find(item => item[0] === hover[0] && item[1] === hover[1])

    if (!toBuild || !construct) return null

    return (<Building
      buildingId={toBuild}
      showRadius={true}
      position={[graphToGlobal(hover[0]), graphToGlobal(hover[1]), 35]}
      rotation={[90, 0, 0]} />)
  }
}

const mapStateToProps = state => {
  return {
    toBuild: state.player.toBuild,
    hover: state.graph.hover,
    constructions: state.graph.constructions
  }
}
export default connect(mapStateToProps)(ToBuild)