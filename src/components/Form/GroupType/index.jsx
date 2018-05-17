import React from 'react'
import { connect } from 'react-redux'
import { filtersOptions } from '../../../constants'
import { getGroupTypeFilter } from '../../../store/selectors'
import { updateFilter } from '../../../store/actions'
import Select from '../Select'

const mapStateToProps = state => ({ value: getGroupTypeFilter(state) })
const mapDispatchToProps = { onChange: updateFilter }

const GroupType = ({ onChange, value }) => (
  <Select
    name='Composition'
    type='groupType'
    options={filtersOptions.groupType}
    value={value}
    onChange={onChange}
  />
)

export default connect(mapStateToProps, mapDispatchToProps)(GroupType)
