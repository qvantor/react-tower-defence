import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Building from './Building.component'
import { graphToGlobal } from '../../common/helpers'

class Buildings extends Component {
  static propTypes = {
    builded: PropTypes.array.isRequired
  }

  render () {
    const { builded, toBuild } = this.props

    return (<group>
      {builded.map((item, i) =>
        <Building
          key={i}
          showRadius={!!toBuild}
          buildingId={item.building}
          rotation={[90, 0, 0]}
          position={[graphToGlobal(item.position[0]), graphToGlobal(item.position[1]), 35]} />
      )}
    </group>)
  }
}

const mapStateToProps = state => {
  return {
    toBuild: state.player.toBuild,
    builded: state.graph.buildings
  }
}
export default connect(mapStateToProps)(Buildings)