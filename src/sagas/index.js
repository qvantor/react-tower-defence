import { sagaMiddleware, store } from '../store/index'
import levelSetted from './levelSetted'

sagaMiddleware.run(levelSetted)