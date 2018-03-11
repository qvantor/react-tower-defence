import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as d3Scale from 'd3-scale'
import XAxis from './xAxis.svg'
import Line from './Line.svg'
import TimeEditor from './TimeEditor.svg'

class Svg extends Component {
  render () {
    const { duration, height, width, scene } = this.props

    const xScale = d3Scale.scaleLinear()
      .domain([0, duration])
      .range([0, width])

    const padding = 15

    return (
      <div className='svg'>
        <svg height={height} width={width + (padding * 2)}>
          <g transform={`translate(5,${padding})`}>
            <TimeEditor scale={xScale} scene={scene} />
            <XAxis scale={xScale} width={width} />
            <Line scale={xScale} height={height} />
            {/*<rect className='bg-rect' style={{ width: width, height: height }} />*/}
          </g>
        </svg>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    duration: state.timeline.duration
  }
}
export default connect(mapStateToProps)(Svg)
