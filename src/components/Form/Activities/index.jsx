import React from 'react'
import { connect } from 'react-redux'
import { getActivitiesFilter, getActivitiesFilterOptions } from '../../../store/selectors'
import { updateFilter } from '../../../store/actions'
import Checkboxes from '../Checkboxes'

const mapStateToProps = state => ({
  values: getActivitiesFilter(state),
  options: getActivitiesFilterOptions(state)
})
const mapDispatchToProps = { onChange: updateFilter }

const Mood = ({ onChange, values, options }) => (
  <Checkboxes
    type='activities'
    options={options}
    selections={values}
    onChange={onChange}
  />
)

export default connect(mapStateToProps, mapDispatchToProps)(Mood)
