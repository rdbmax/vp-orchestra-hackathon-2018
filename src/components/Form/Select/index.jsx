import React, { Component } from 'react'
import injectSheet from 'react-jss'

const styles = {
  wrapper: {
    position: 'relative',
    width: '100%'
  },
  button: {
    width: '100%',
    marginTop: '20px'
  },
  currentValue: {

  },
  options: {
    width: '100%',
    position: 'absolute',
    bottom: '-3px',
    transform: 'translateY(100%)'
  },
  option: {
    width: '100%',

  }
}

// props
// => type
// => value
// => options
// => onChange
class Select extends Component {
  state = { isOpen: false }

  onClickButton = () => {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }))
  }

  onChange = option => () => {
    const { onChange, type } = this.props

    onChange(type, option)
    this.setState(({ isOpen: false }))
  }

  render() {
    const { classes, value, options } = this.props
    const { isOpen } = this.state

    return (
      <div className={classes.wrapper}>
        <button onClick={this.onClickButton} className={classes.button}>
          <span>Ambiance</span>
          <span className={classes.currentValue}>{ value }</span>
        </button>

        { isOpen && <div className={classes.options}>
          { options.map(option => (<button
            key={option}
            className={classes.option}
            onClick={this.onChange(option)}
          >
            { option }
          </button>)) }
        </div> }
      </div>
    )
  }
}

export default injectSheet(styles)(Select)
