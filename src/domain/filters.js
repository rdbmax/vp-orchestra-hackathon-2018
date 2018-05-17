export const filtersFunctions = {
  mood: filterValue => product => product.offerDescription.mood.includes(filterValue),
  groupType: filterValue => product => product.offerDescription.groupType.includes(filterValue),
  // activities: filterValue => product => product.offerDescription.activities.includes(filterValue)
  activities: filterValue => product => filterValue.every(value => product.offerDescription.activities.includes(value))
}

// Example :
// const filters = {
//   maxPrice: filterValue => product => (product.price <= filterValue),
//   parent: filterValue => product => (product.parent === filterValue),
//   tags: filterValue => product => filterValue.every(value => product.tags.includes(value))
// }
