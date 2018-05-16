import React from 'react';
import injectSheet from 'react-jss'
import Header from './components/Header'
import Search from './components/Search'
import Results from './components/Results'

const styles = {
  app: {
    backgroundImage: 'url(./background.png)',
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat'
  }
}

const App = ({ classes }) => (
  <div className={classes.app}>
    <Header />
    <Search />
    <Results />
  </div>
)

export default injectSheet(styles)(App);
