import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  wrapper: {
    backgroundColor: '#EF1D96',
    height: '8px',
    width: '100%',
    marginTop: '20px'
  }
}

const Footer = ({ classes }) => (
  <div className={classes.wrapper} />
)

export default injectSheet(styles)(Footer)
