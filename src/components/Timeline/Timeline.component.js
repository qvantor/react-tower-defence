import React, { Component } from 'react'
import { connect } from 'react-redux'
import Buttons from './Buttons.component'
import Time from './Time.component'
import TimelineSvg from '../TimelineSvg/TimelineSvg.component'

class Timeline extends Component {

  render () {
    const {} = this.props

    return (
      <div>
        <div className='row'>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-4'>
                <Time />
              </div>
              <div className='col-md-8'>
                <Buttons />
              </div>
            </div>
          </div>
        </div>
        <TimelineSvg />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}
export default connect(mapStateToProps)(Timeline)