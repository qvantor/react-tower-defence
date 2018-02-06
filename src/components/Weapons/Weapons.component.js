import React, { Component } from 'react'
import { connect } from 'react-redux'
import { buildWeaponSet } from 'reducers/game/game.actions'

class Weapons extends Component {
  render () {
    const { weapons, money } = this.props

    return (
      <div>
        <h4>Weapons</h4>
        {weapons.map(item =>
          <h6
            className={money < item.price ? 'unactive' : ''}
            key={item.id}
            onClick={() => money > item.price && buildWeaponSet(item.id)}>
            {item.name} ({item.price})
          </h6>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  weapons: state.weapons,
  money: state.player.money
})

export default connect(mapStateToProps)(Weapons)