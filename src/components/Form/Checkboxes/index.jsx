import React from 'react'

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
const Checkboxes = ({ type, options, selections = [], onChange }) => (
  options.map(option =>
    <p key={option}>
      <input type="checkbox" onChange={onChangeValue(type, onChange, option, selections)} checked={selections.includes(option)} /> { option }
    </p>
  )
)

export default Checkboxes
