import React, { Component } from 'react'
import { connect } from 'react-redux'
import Buttons from './Buttons.component'
import Time from './Time.component'
import TimelineSvg from '../TimelineSvg/TimelineSvg.component'

class Timeline extends Component {

  render () {
    const {} = this.props

    return (<TimelineSvg />)
  }
}

const mapStateToProps = state => {
  return {}
}
export default connect(mapStateToProps)(Timeline)