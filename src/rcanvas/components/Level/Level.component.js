import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { globalToGraph } from '../../common/helpers'

import HoverHelper from './HoverHelper.component'
import Portal from './Portal.component'
import Gate from './Gate.component'
import Path from '../Path/Path.component'
import ToBuild from '../ToBuild/ToBuild.component'
import ToConstruct from '../ToConstruct/ToConstruct.component'
import Buildings from '../Buildings/Buildings.component'
import Constructions from '../Constructions/Constructions.component'
import Enemies from '../Enemies/Enemies.component'

import { setHover, addInstance } from 'reducers/graph/graph.actions'

class Level extends Component {
  static propTypes = {
    field: PropTypes.array.isRequired,
    square: PropTypes.number.isRequired,
    setHover: PropTypes.func.isRequired,
    addInstance: PropTypes.func.isRequired
  }

  render () {
    const { field, square, setHover, addInstance } = this.props

    return (
      <group
        onClick={e => addInstance()}
        onMouseMove={e => setHover([globalToGraph(e.point.x), globalToGraph(e.point.y)])}>
        <boxBuffer
          width={field[0] * square}
          height={field[1] * square}
          depth={square * 0.1} />
        <gridHelper
          size={field[0] * square}
          divisions={field[0] * square / square}
          position={[0, 0, (square * 0.1 / 2) + 0.2]}
          rotation={[90, 0, 0]} />
        <HoverHelper />
        <Portal />
        <Gate />
        <Path />
        <Buildings />
        <Constructions />
        <Enemies />
        <ToBuild />
        <ToConstruct />
      </group>
    )
  }
}

const mapStateToProps = state => ({
  field: state.levels.list.find(item => item.id === state.progress.level).field,
  square: state.config.field.square
})

export default connect(mapStateToProps, { setHover, addInstance })(Level)