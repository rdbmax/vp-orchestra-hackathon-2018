import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  arrow: {
    appearance: 'none',
    backgroundColor: 'transparent',
    width: 0,
    height: 0,
    borderTop: '10px solid transparent',
    borderLeft: '10px solid rgb(218, 50, 136)',
    borderRight: 0,
    borderBottom: '10px solid transparent',
    cursor: 'pointer',
    transform: ({ isOpen }) => (isOpen) ? 'rotate(-180deg)' : 'rotate(0)',
    transformOrigin: '20% center',
    transition: 'transform .4s ease',
    '&:focus': {
      outline: '0'
    }
  }
}

const Mood = ({ onClick, isOpen, classes }) => (
  <button className={classes.arrow} onClick={onClick} />
)

export default injectSheet(styles)(Mood)
