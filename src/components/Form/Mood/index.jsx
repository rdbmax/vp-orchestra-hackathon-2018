import React, { Component } from 'react'
import { connect } from 'react-redux'
import injectSheet from 'react-jss'
import { compose } from 'recompose'
import { filtersOptions } from '../../../constants'
import { getMoodFilter } from '../../../store/selectors'
import { updateFilter } from '../../../store/actions'

const mapStateToProps = state => ({ value: getMoodFilter(state) })
const mapDispatchToProps = { onChange: updateFilter }

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

class Mood extends Component {
  state = {
    isOpen: false
  }

  onClickButton = () => {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }))
  }

  onChange = option => () => {
    this.props.onChange('mood', option)
    this.setState(({ isOpen: false }))
  }

  render() {
    const { classes, value } = this.props
    const { isOpen } = this.state

    return (
      <div className={classes.wrapper}>
        <button onClick={this.onClickButton} className={classes.button}>
          <span>Ambiance</span>
          <span className={classes.currentValue}>{ value }</span>
        </button>

        { isOpen && <div className={classes.options}>
          { filtersOptions.mood.map(option => (<button
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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  injectSheet(styles)
)(Mood)
