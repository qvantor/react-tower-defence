import React, { Component } from 'react'
import { connect } from 'react-redux'

class Money extends Component {
  render () {
    const { money } = this.props

    return (
      <div>
        <h6>Money: {money}</h6>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    money: state.player.money
  }
}
export default connect(mapStateToProps)(Money)