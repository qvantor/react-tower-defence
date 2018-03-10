import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as d3Scale from 'd3-scale'
import XAxis from './xAxis.svg'
import Line from './Line.svg'

class Svg extends Component {
  render () {
    const { scene, duration, height, width } = this.props

    const xScale = d3Scale.scaleLinear()
      .domain([0, duration])
      .range([0, width])

    const padding = 15

    return (
      <div className='svg'>
        <svg height={height} width={width + (padding * 2)}>
          <g transform={`translate(${padding},${padding})`}>
            <XAxis scale={xScale} />
            <Line scale={xScale} height={height} />
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
