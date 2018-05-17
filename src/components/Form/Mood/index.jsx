import React from 'react'
import { connect } from 'react-redux'
import { filtersOptions } from '../../../constants'
import { getMoodFilter } from '../../../store/selectors'
import { updateFilter } from '../../../store/actions'
import Select from '../Select'

const mapStateToProps = state => ({ value: getMoodFilter(state) })
const mapDispatchToProps = { onChange: updateFilter }

const Mood = ({ onChange, value }) => (
  <Select
    type='mood'
    options={filtersOptions.mood}
    value={value}
    onChange={onChange}
  />
)

export default connect(mapStateToProps, mapDispatchToProps)(Mood)
