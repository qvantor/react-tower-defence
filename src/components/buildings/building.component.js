import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { toBuild } from '../../reducers/player/player.actions'

class Building extends Component {
  render () {
    const { money, item, toBuild } = this.props
    return (
      <div onClick={e => toBuild(item)} className={money > item.price ? 'active' : 'passive'}>
        {item.name}
      </div>
    )
  }
}

Building.propTypes = {}

const mapStateToProps = state => ({
  money: state.player.money
})

export default connect(mapStateToProps, { toBuild })(Building)