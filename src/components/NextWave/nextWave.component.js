import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { startWave } from 'reducers/progress/progress.actions'

class NextWave extends Component {
  static propTypes = {
    startWave: PropTypes.func.isRequired
  }

  render () {
    const { startWave } = this.props

    return (
      <div onClick={e => startWave()}>Start wave</div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}
export default connect(mapStateToProps, { startWave })(NextWave)