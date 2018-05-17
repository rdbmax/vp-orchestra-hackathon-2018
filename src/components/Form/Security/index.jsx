import React from 'react'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import { connect } from 'react-redux'
import { getSecurityFilter } from '../../../store/selectors'
import { updateFilter } from '../../../store/actions'

const styles = {
  wrapper: {
    color: 'white',
    padding: '5px 0',
    marginTop: '10px'
  }
}

const mapStateToProps = state => ({
  value: getSecurityFilter(state)
})
const mapDispatchToProps = { onChange: updateFilter }

const onChangeValue = (onChange, type) => ({ target }) => {
  onChange(type, target.checked)
}

const Security = ({ onChange, value, options, classes }) => (
  <p className={classes.wrapper}>
    <input type='checkbox' checked={value} onChange={onChangeValue(onChange, 'security')} />
    Sécurité
  </p>
)

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  injectSheet(styles)
)(Security)
