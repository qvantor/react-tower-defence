import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from 'antd/lib/button'

import { play, pause, shiftTime } from 'reducers/timeline/timeline.actions'

const { Group } = Button

class Timeline extends Component {
  playPause = () => {
    const { playing } = this.props
    playing ? pause() : play()
  }

  render () {
    const { playing } = this.props

    return (
      <Group>
        <Button type='primary' icon='step-backward' onClick={e => shiftTime(-16)} />
        <Button type='primary' onClick={e => this.playPause()} icon={playing ? 'pause-circle-o' : 'play-circle-o'} />
        <Button type='primary' icon='step-forward' onClick={e => shiftTime(16)} />
        <Button type='primary' icon='setting' />
      </Group>
    )
  }
}

const mapStateToProps = state => {
  return {
    playing: state.timeline.play,
    time: state.timeline.time,
  }
}
export default connect(mapStateToProps)(Timeline)