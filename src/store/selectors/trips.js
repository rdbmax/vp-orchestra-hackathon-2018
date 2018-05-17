import { createSelector } from 'reselect'
import { filtersFunctions } from '../../domain/filters'

const getTripsStore = state => state.trips

export const getAllTrips = createSelector(
  getTripsStore,
  ({ list }) => list
)

export const getActiveFilters = createSelector(
  getTripsStore,
  ({ filters }) => filters
)

export const getFilteredTrips = createSelector(
  getAllTrips,
  getActiveFilters,
  (allTrips, activeFilters) => Object
    .values(activeFilters)
    .filter(filter => Boolean(filter))
    .map(({ filter, value }) => filtersFunctions[filter](value))
    .reduce((filteredData, filterFunction) => filteredData.filter(filterFunction), allTrips)
)

export const getMoodFilter = createSelector(
  getActiveFilters,
  ({ mood }) => mood && mood.value
)
