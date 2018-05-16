import trips from '../../mocks/trips.json'
// import { ON_CHANGE_FILTERS } from '../actions'

// const isTypeGenerator = actionType => type => type === actionType

const defaultState = {
  list: trips,
  // filters: []
};

export default (state = defaultState, { type, payload }) => {
  // const isType = isTypeGenerator(type)
  return state
  // if (isType(ON_CHANGE_FILTERS)) {
  //   return {
  //     ...state,
  //     filters: state.filters.map(filter => (payload.name === filter.name)
  //       ? payload
  //       : filter)
  //   }
  // } else {
  //   return state
  // }
}
