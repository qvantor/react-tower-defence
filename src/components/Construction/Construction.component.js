import React, { Component } from 'react'
import { connect } from 'react-redux'

import { toConstruct } from 'reducers/player/player.actions'

class Construction extends Component {
  render () {
    const { toConstruct } = this.props

    return (
      <div onClick={e => toConstruct(true)}>
        <h5>Construction</h5>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, { toConstruct })(Construction)