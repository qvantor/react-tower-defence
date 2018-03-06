import Immutable from 'seamless-immutable'

export default Immutable([
  {
    type: 'object',
    name: 'Group',
    Component: 'group'
  },
  {
    type: 'geometry',
    name: 'Box',
    Component: 'boxBuffer'
  },
  {
    type: 'geometry',
    name: 'Circle',
    Component: 'circleBuffer'
  }
])