import { store } from '../../store/index'
import { canvas } from '../'

// @todo put it all in one store
const onDocumentMouseDown = event => store.dispatch({ type: 'MOUSE_CLICK', payload: event })

window.addEventListener('load', e => canvas.addEventListener('click', onDocumentMouseDown, false), false)