import React from 'react'
import { connect } from 'react-redux'
import { getInsoliteFilter } from '../../../store/selectors'
import { updateFilter } from '../../../store/actions'

const mapStateToProps = state => ({
  value: getInsoliteFilter(state)
})
const mapDispatchToProps = { onChange: updateFilter }

const onChangeValue = (onChange, type) => ({ target }) => {
  onChange(type, target.checked)
}

const Insolite = ({ onChange, value, options }) => (
  <p>
    <input type='checkbox' checked={value} onChange={onChangeValue(onChange, 'insolite')} />
    Insolite
  </p>
)

export default connect(mapStateToProps, mapDispatchToProps)(Insolite)
