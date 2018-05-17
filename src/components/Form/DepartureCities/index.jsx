import React from 'react'
import { connect } from 'react-redux'
import { getDepartureCitiesFilter, getDepartureCitiesFilterOptions } from '../../../store/selectors'
import { updateFilter } from '../../../store/actions'
import Select from '../Select'

const mapStateToProps = state => ({
  value: getDepartureCitiesFilter(state),
  options: getDepartureCitiesFilterOptions(state)
})
const mapDispatchToProps = { onChange: updateFilter }

const DepartureCities = ({ onChange, value, options }) => (
  <Select
    name='Ville de Départ'
    type='departureCities'
    options={options}
    value={value}
    onChange={onChange}
  />
)

export default connect(mapStateToProps, mapDispatchToProps)(DepartureCities)
