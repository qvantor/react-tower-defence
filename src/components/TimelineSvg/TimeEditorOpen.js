import React, { Component } from 'react'

class TimeEditorOpen extends Component {
  render () {
    const { keyframes, scale } = this.props

    return (
      <div className='open-params'>
        <div className='params-row'>
          {keyframes.map((item, i) =>
            <div key={i} style={{ marginLeft: scale(item.time) - 4 }} className='keyframe' />)}
        </div>
      </div>
    )
  }
}

export default TimeEditorOpen
