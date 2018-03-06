import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as d3Scale from 'd3-scale'
import XAxis from './xAxis'

class Svg extends Component {
  render () {
    const { scene, duration, width, height } = this.props
    const widthScene = 3000
    const heightScene = 300

    const xScale = d3Scale.scaleLinear()
      .domain([0, duration])
      .range([0, widthScene])

    return (
      <div className='svg'>
        <svg width={widthScene + 30} height={height}>
          <g transform='translate(10,10)'>
            <XAxis scale={xScale} transform={`translate(0,${height})`} />
          </g>
        </svg>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    scene: state.scene,
    duration: state.timeline.duration
  }
}
export default connect(mapStateToProps)(Svg)
