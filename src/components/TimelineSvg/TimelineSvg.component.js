import React, { Component } from 'react'
import { connect } from 'react-redux'
import Svg from './Svg.component'

class TimelineSvg extends Component {
  state = { width: 500, height: 300 }

  componentDidMount () {
    this.setState({ width: this.refs.element.offsetWidth, height: this.refs.element.offsetHeight })
  }

  render () {
    const {} = this.props
    const { width, height } = this.state

    return (
      <div className='row' ref='element'>
        <div className='col-md-4'>
        </div>
        <div className='col-md-8' ref='container'>
          <Svg width={width} height={height} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}
export default connect(mapStateToProps)(TimelineSvg)