import React from 'react'
import { connect } from 'react-redux'
import { getSaisonalityFilter, getSaisonalityFilterOptions } from '../../../store/selectors'
import { updateFilter } from '../../../store/actions'
import Select from '../Select'

const mapStateToProps = state => ({
  value: getSaisonalityFilter(state),
  options: getSaisonalityFilterOptions(state)
})
const mapDispatchToProps = { onChange: updateFilter }

const Saisonality = ({ onChange, value, options }) => (
  <Select
    name='Saisonnalité'
    type='saisonality'
    options={options}
    value={value}
    onChange={onChange}
    theme='secondary'
  />
)

export default connect(mapStateToProps, mapDispatchToProps)(Saisonality)
