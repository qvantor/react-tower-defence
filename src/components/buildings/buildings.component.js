import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Building from './building.component'

class Buildings extends Component {
  render () {
    const { list } = this.props
    return (
      <div className='buildings'>
        <h5>Buildings</h5>
        {list.map(item => <Building key={item.id} item={item} />)}
      </div>
    )
  }
}

Buildings.propTypes = {}

const mapStateToProps = state => ({
  list: state.buildings.list
})

export default connect(mapStateToProps)(Buildings)