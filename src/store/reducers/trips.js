import trips from '../../mocks/trips.json'
import { ON_CHANGE_FILTER } from '../actions'

const isTypeGenerator = actionType => type => (type === actionType)

const defaultState = {
  list: trips,
  filters: []
}

export default (state = defaultState, { type, payload }) => {
  const isType = isTypeGenerator(type)

  if (isType(ON_CHANGE_FILTER)) {
    return {
      ...state,
      filters: { ...state.filters, [payload.filter]: payload }
    }
  }

  return state
}
