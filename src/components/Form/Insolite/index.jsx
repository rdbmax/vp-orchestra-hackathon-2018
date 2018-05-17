import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import injectSheet from 'react-jss'
import { getInsoliteFilter } from '../../../store/selectors'
import { updateFilter } from '../../../store/actions'

const styles = {
  wrapper: {
    color: 'white',
    padding: '5px 0'
  }
}

const mapStateToProps = state => ({
  value: getInsoliteFilter(state)
})
const mapDispatchToProps = { onChange: updateFilter }

const onChangeValue = (onChange, type) => ({ target }) => {
  onChange(type, target.checked)
}

const Insolite = ({ onChange, value, options, classes }) => (
  <p className={classes.wrapper}>
    <input type='checkbox' checked={value} onChange={onChangeValue(onChange, 'insolite')} />
    Insolite
  </p>
)

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  injectSheet(styles)
)(Insolite)
