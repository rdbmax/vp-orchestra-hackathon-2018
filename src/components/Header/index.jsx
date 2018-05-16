import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  wrapper: {
    backgroundColor: 'pink'
  }
}

const Header = ({ classes }) => (
  <div className={classes.wrapper}>
    Header
  </div>
)

export default injectSheet(styles)(Header)
