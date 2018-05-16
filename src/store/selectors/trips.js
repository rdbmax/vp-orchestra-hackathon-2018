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
  (allTrips, activeFilters) => activeFilters
    .map(({ type, value }) => filtersFunctions[type](value))
    .reduce((filteredData, filterFunction) => filteredData.filter(filterFunction), allTrips)
)
