import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { graphToGlobal } from '../../common/helpers'

class Buildings extends Component {
  static propTypes = {
    builded: PropTypes.array.isRequired,
    buildings: PropTypes.array.isRequired
  }

  render () {
    const { buildings, builded } = this.props

    return (<group>
      {builded.map((item, i) =>
        <mesh
          key={i}
          mesh={buildings.find(b => b.id === item.building).model.clone()}
          rotation={[90, 0, 0]}
          position={[graphToGlobal(item.position[0]), graphToGlobal(item.position[1]), 30]} />)}
    </group>)
  }
}

const mapStateToProps = state => {
  return {
    builded: state.graph.buildings,
    buildings: state.buildings.list
  }
}
export default connect(mapStateToProps)(Buildings)