import { sagaMiddleware } from '../store/index'

import levelSetted from './levelSetted'
import groupClick from './groupClick'

sagaMiddleware.run(levelSetted)
sagaMiddleware.run(groupClick)