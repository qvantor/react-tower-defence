import React, { Component } from 'react'
import * as THREE from 'three'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const geometry = new THREE.SphereBufferGeometry(7, 32, 32)
const material = new THREE.MeshBasicMaterial({ color: 0x9c88ff })
const mesh = new THREE.Mesh(geometry, material)

class Enemies extends Component {
  static propTypes = {}

  getPos (path, pos) {
    pos = pos >= 1 ? 1 : pos
    const point = path.getPoint(pos)
    return [
      ((point.x * 100) + Math.sin(pos * 100) * 20) - 50,
      ((point.y * 100) + Math.sin(pos * 100) * 20) - 50,
      Math.cos(pos * 100) * 20 + 30]
  }

  render () {
    const { enemies, enemiesModels, path } = this.props
    const Path = new THREE.Path(path.map(i => ({ x: i[0], y: i[1] })))

    return (<group>
      {enemies.map((item, i) =>
        <mesh
          key={item.id}
          mesh={mesh}
          // width={15}
          // height={15}
          // depth={15}
          position={this.getPos(Path, item.position)} />)}
    </group>)
  }
}

const mapStateToProps = state => {
  return {
    enemies: state.progress.activeEnemies,
    enemiesModels: state.enemies.list,
    path: state.graph.path
  }
}
export default connect(mapStateToProps)(Enemies)