import React, { Component } from 'react'
import { connect } from 'react-redux'

class Time extends Component {
  render () {
    const { time } = this.props
    let seconds = time / 1000
    return (
      <div className='time'>{seconds}</div>
    )
  }
}

const mapStateToProps = state => {
  return {
    time: state.timeline.time
  }
}
export default connect(mapStateToProps)(Time)