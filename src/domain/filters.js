export const filtersFunctions = {
  mood: filterValue => product => product.offerDescription.mood.includes(filterValue),
  groupType: filterValue => product => product.offerDescription.groupType.includes(filterValue),
  activities: filterValue => product => filterValue.every(value => product.offerDescription.activities.includes(value)),
  departureCities: filterValue => product => product.departureDates
    .reduce((allCities, departure) => ([ ...allCities, ...departure.departureCities ]), [])
    .includes(filterValue),
  avgTemperature: filterValue => product => Boolean(product.departureDates
    .reduce((allTemperatures, departure) => ([ ...allTemperatures, departure.temperature ]), [])
    .find(temperature => {
      if (temperature < 10 && filterValue === 'Moins de 10°C')
        return true
      if (temperature >= 10 && temperature < 20 && filterValue === 'Entre 10 et 20°C')
        return true
      if (temperature >= 20 && temperature < 30 && filterValue === 'Entre 20 et 30°C')
        return true
      if (temperature >= 30 && filterValue === 'Plus de 30°C')
        return true
      return false
    })),
  saisonality: filterValue => product => product.departureDates
    .map(deprature => deprature.saisonality)
    .filter(saisonality => saisonality === filterValue)
    .includes(filterValue),
  security: filterValue => product => (!filterValue) ? true : product.offerDescription.security,
  insolite: filterValue => product => (!filterValue) ? true : product.offerDescription.insolite
}
