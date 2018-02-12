import { sagaMiddleware } from '../store/index'

import levelSetted from './levelSetted'
import groupClick from './groupClick'
import mainloop from './mainloop'

sagaMiddleware.run(levelSetted)
sagaMiddleware.run(groupClick)
sagaMiddleware.run(mainloop)
