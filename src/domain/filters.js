export const filtersFunctions = {
  mood: filterValue => product => product.offerDescription.mood.includes(filterValue)
}

// Example :
// const filters = {
//   maxPrice: filterValue => product => (product.price <= filterValue),
//   parent: filterValue => product => (product.parent === filterValue),
//   tags: filterValue => product => filterValue.every(value => product.tags.includes(value))
// }
