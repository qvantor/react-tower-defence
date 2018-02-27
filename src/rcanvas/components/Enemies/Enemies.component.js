import React, { Component } from 'react'
import { connect } from 'react-redux'

import Enemy from './Enemy.component'

import { getEnemyPos } from 'reducers/graph/graph.actions'

class Enemies extends Component {
  render () {
    const { enemies } = this.props

    return (
      <group>
        {enemies.map(item => <Enemy key={item.id} position={getEnemyPos(item.position)} />)}
      </group>
    )
  }
}

const mapStateToProps = state => {
  return {
    enemies: state.game.activeEnemies
  }
}
export default connect(mapStateToProps)(Enemies)