import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { graphToGlobal } from '../../common/helpers'

class ToBuild extends Component {
  static propTypes = {
    toBuild: PropTypes.object,
    hover: PropTypes.array.isRequired
  }

  render () {
    const { toBuild, hover } = this.props

    if (!toBuild) return null

    return (<mesh
      mesh={toBuild.model.clone()}
      position={[graphToGlobal(hover[0]), graphToGlobal(hover[1]), 30]}
      rotation={[90, 0, 0]} />)
  }
}

const mapStateToProps = state => {
  return {
    toBuild: state.buildings.list.find(item => item.id === state.player.toBuild),
    hover: state.graph.hover
  }
}
export default connect(mapStateToProps)(ToBuild)