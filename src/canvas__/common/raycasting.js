import { mouse, raycaster, scene } from '../'
import { globalToGround } from '../common/helpers'
import { store } from '../../store/index'
import { POINT_HOVERED } from '../../reducers/graph/graph.constants'

const onDocumentMouseMove = event => {
  event.preventDefault()
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1
  mouse.y = -( event.clientY / window.innerHeight ) * 2 + 1

  const intersects = raycaster.intersectObjects(scene.children, true)
  if (intersects.length === 0) return
  const closest = intersects[0]
  const hoverPosition = [globalToGround(closest.point.x), globalToGround(closest.point.y)]
  const { graph: { hover } } = store.getState()
  if (hoverPosition[0] !== hover[0] || hoverPosition[1] !== hover[1]) {
    store.dispatch({ type: POINT_HOVERED, payload: hoverPosition })
  }
}

window.addEventListener('mousemove', onDocumentMouseMove, false)