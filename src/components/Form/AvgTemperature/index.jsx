import React from 'react'
import { connect } from 'react-redux'
import { getAvgTemperatureFilter, getAvgTemperatureFilterOptions } from '../../../store/selectors'
import { updateFilter } from '../../../store/actions'
import Select from '../Select'

const mapStateToProps = state => ({
  value: getAvgTemperatureFilter(state),
  options: getAvgTemperatureFilterOptions(state)
})
const mapDispatchToProps = { onChange: updateFilter }

const AvgTemperature = ({ onChange, value, options }) => (
  <Select
    name='Température'
    type='avgTemperature'
    options={options}
    value={value}
    onChange={onChange}
    theme='secondary'
  />
)

export default connect(mapStateToProps, mapDispatchToProps)(AvgTemperature)
