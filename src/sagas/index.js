import { sagaMiddleware, store } from '../store/index'
import levelSetted from './levelSetted'
import mainloop from './mainloop'

sagaMiddleware.run(levelSetted)
sagaMiddleware.run(mainloop)