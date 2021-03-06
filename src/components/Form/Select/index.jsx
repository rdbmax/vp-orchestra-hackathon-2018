import React, { Component } from 'react'
import injectSheet from 'react-jss'

const styles = {
  wrapper: {
    position: 'relative',
    width: ({ theme }) => (theme === 'secondary') ? '180px' : '100%'
  },
  button: {
    width: '100%',
    marginTop: '20px',
    marginBottom: '0px',
    padding: '5px 10px',
    borderRadius: '6px',
    border: '2px solid #BFBFBF',
    borderBottom: ({ isOpen }) => (isOpen) ? 'none' : '',
    borderBottomRadius: ({ isOpen }) => (isOpen) ? 'none' : '',
    backgroundColor: '#FFFFFF',
    color: '#404040',
    fontWeight: 'bold',
    textAlign: 'left',
    outline: 'none',
    cursor: 'pointer',
  },
  currentValue: {
    color: '#DA3288',
    textAlign: 'right',
    '&:after': {
      content: 'url(./img/engine/FlecheBasXS.png)',
      paddingLeft: '5px',
    },
  },
  options: {
    width: '100%',
    position: 'absolute',
    bottom: '-3px',
    transform: 'translateY(100%)',
    borderRadius: '6px',
    borderTopRadius: 'none',
    border: '2px solid #BFBFBF',
    borderTop: 'none',
    paddingRight: '0px',
    zIndex: '1000'
  },
  option: {
    width: '100%',
    padding: '5px 10px',
    marginTop: '-4px',
    border: 'none',
    borderTopRadius: 'none',
    backgroundColor: '#FFFFFF',
    color: '#DA3288',
    fontWeight: 'bold',
    textAlign: 'right',
    outline: 'none',
    cursor: 'pointer'
  }
}

// props
// => name
// => type
// => value
// => options
// => onChange
// => theme [secondary]
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
    const { classes, name, value, options } = this.props
    const { isOpen } = this.state

    return (
      <div className={classes.wrapper}>
        <button onClick={this.onClickButton} className={classes.button}>
          <span>{ name }</span>
          <span className={classes.currentValue}> { value }</span>
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
