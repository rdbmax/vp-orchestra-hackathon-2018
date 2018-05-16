import React from 'react';
import injectSheet from 'react-jss'
import Header from './components/Header'

const styles = {
  app: {
    backgroundImage: 'url(./background.png)',
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat'
  }
}

const App = ({ classes }) => (
  <div className={classes.app}>
    <Header key='header' />
  </div>
)

export default injectSheet(styles)(App);
