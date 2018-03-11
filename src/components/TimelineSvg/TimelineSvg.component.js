import React, { Component } from 'react'
import { connect } from 'react-redux'
import Svg from './Svg/Svg.component'
import Controls from './Controls.component'

class TimelineSvg extends Component {
  state = { width: 500, height: 300 }

  componentDidMount () {
    this.setState({ width: this.refs.element.offsetWidth, height: this.refs.element.offsetHeight })
  }

  render () {
    const { scene } = this.props
    const { width, height } = this.state
    const scrollHeight = 2000
    const scrollWidth = 2000

    const timelinePercent = 0.73

    return (
      <div className='timeline' ref='element'>
        <div className='scroll-y' style={{ height: scrollHeight }}>
          <div className='col-md-3 no-padding'>
            <Controls scene={scene} />
          </div>
          <div className='col-md-9 no-padding'>
            <Svg
              scene={scene}
              height={height}
              width={width * timelinePercent} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    scene: state.scene
  }
}
export default connect(mapStateToProps)(TimelineSvg)