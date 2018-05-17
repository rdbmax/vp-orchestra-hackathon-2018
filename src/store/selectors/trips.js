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

export const getActivitiesFilter = createSelector(
  getActiveFilters,
  ({ activities }) => activities && activities.value
)

export const getActivitiesFilterOptions = createSelector(
  getFilteredTrips,
  trips => {
    const allActivities = trips
      .reduce((list, trip) => [ ...list, ...trip.offerDescription.activities ], [])
    return [...new Set(allActivities)]
  }
)

export const getGroupTypeFilter = createSelector(
  getActiveFilters,
  ({ groupType }) => groupType && groupType.value
)

export const getDepartureCitiesFilter = createSelector(
  getActiveFilters,
  ({ departureCities }) => departureCities && departureCities.value
)

export const getDepartureCitiesFilterOptions = createSelector(
  getFilteredTrips,
  trips => {
    const allDepartureCities = trips
      .reduce((list, trip) => {
        const cities = trip.departureDates.reduce((allCities, departure) => {
          return [ ...allCities, ...departure.departureCities ]
        }, [])

        return [ ...list, ...cities ]
      }, [])
    return [...new Set(allDepartureCities)]
  }
)

export const getAvgTemperatureFilter = createSelector(
  getActiveFilters,
  ({ avgTemperature }) => avgTemperature && avgTemperature.value
)

export const getAvgTemperatureFilterOptions = createSelector(
  getFilteredTrips,
  trips => {
    const allTemperatures = trips.reduce((temperatures, trip) => {
      const tripTemperatures = trip.departureDates.map(trip => trip.temperature)
      return [ ...temperatures, ...tripTemperatures ]
    }, [])

    const options = [
      {
        label: 'Moins de 10°C',
        value: Boolean(allTemperatures.find(temperature => temperature < 10))
      },
      {
        label: 'Entre 10 et 20°C',
        value: Boolean(allTemperatures.find(temperature => temperature >= 10 && temperature < 20))
      },
      {
        label: 'Entre 20 et 30°C',
        value: Boolean(allTemperatures.find(temperature => temperature >= 20 && temperature < 30))
      },
      {
        label: 'Plus de 30°C',
        value: Boolean(allTemperatures.find(temperature => temperature >= 30))
      }
    ]

    return options.filter(({ value }) => value).map(({ label }) => label)
  }
)
