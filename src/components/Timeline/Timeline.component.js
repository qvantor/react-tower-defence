import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from 'antd/lib/button'

const { Group } = Button

class Timeline extends Component {

  render () {
    const {} = this.props

    return (
      <div className='row'>
        <div className='col-md-3'>
          <Group>
            <Button type='primary' icon='step-backward' />
            <Button type='primary' icon='play-circle-o' />
            <Button type='primary' icon='step-forward' />
            <Button type='primary' icon='setting' />
          </Group>
        </div>
        <div className='col-md-9'>

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}
export default connect(mapStateToProps)(Timeline)