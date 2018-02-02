import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { graphToGlobal } from '../../common/helpers'

class Path extends Component {
  static propTypes = {
    path: PropTypes.array.isRequired
  }

  render () {
    const { path } = this.props

    return (
      <line
        position={[0, 0, 0]}
        vertices={path.map(item => ([graphToGlobal(item[0]), graphToGlobal(item[1]), 0]))} />)
  }
}

const mapStateToProps = state => ({
  path: state.graph.path
})

export default connect(mapStateToProps)(Path)