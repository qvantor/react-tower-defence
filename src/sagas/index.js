import { sagaMiddleware } from '../store/index'

import levelSetted from './levelSetted'

sagaMiddleware.run(levelSetted)