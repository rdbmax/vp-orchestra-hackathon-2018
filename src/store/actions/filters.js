export const ON_CHANGE_FILTER = 'ON_CHANGE_FILTER'

export const updateFilter = (filter, value) => ({
  type: ON_CHANGE_FILTER,
  payload: { filter, value }
})
