import React from 'react'
import injectSheet from 'react-jss'

const mapWidth = 1024

const styles = {
  wrapper: {
    position: 'absolute',
    left: `calc(50% - ${mapWidth / 2}px + 10px)`,
    top: '50px',
    zIndex: 2,
    padding: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    borderRadius: '3px'
  }
}

const Form = ({ classes }) => (
  <div className={classes.wrapper}>
    Que cherchez vous ?
  </div>
)

export default injectSheet(styles)(Form)
