import React from 'react'
import { connect } from 'react-redux'
import { getSecurityFilter } from '../../../store/selectors'
import { updateFilter } from '../../../store/actions'

const mapStateToProps = state => ({
  value: getSecurityFilter(state)
})
const mapDispatchToProps = { onChange: updateFilter }

const onChangeValue = (onChange, type) => ({ target }) => {
  onChange(type, target.checked)
}

const Security = ({ onChange, value, options }) => (
  <p>
    <input type='checkbox' checked={value} onChange={onChangeValue(onChange, 'security')} />
    Sécurité
  </p>
)

export default connect(mapStateToProps, mapDispatchToProps)(Security)
