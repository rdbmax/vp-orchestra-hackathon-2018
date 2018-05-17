import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  option: {
    color: 'white',
    padding: '5px 0'
  }
}

const onChangeValue = (type, onChange, option, selections) => ({ target: { checked } }) => {
  if (checked)
    onChange(type, [ ...selections, option ])
  else
    onChange(type, selections.filter(opt => opt !== option))
}

// props
// => options
// => selections
// => onChange
const Checkboxes = ({ type, options, selections = [], onChange, classes }) => (
  options.map(option =>
    <p className={classes.option} key={option}>
      <input type="checkbox" onChange={onChangeValue(type, onChange, option, selections)} checked={selections.includes(option)} /> { option }
    </p>
  )
)

export default injectSheet(styles)(Checkboxes)
