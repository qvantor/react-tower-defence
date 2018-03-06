import { sagaMiddleware } from '../store/index'

import play from './play'

sagaMiddleware.run(play)