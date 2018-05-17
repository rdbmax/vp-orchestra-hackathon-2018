import React from 'react';
import injectSheet from 'react-jss'
import Header from './components/Header'
import Search from './components/Search'
import Results from './components/Results'
import Footer from './components/Footer'

const styles = {
  app: {
    backgroundImage: 'url(./background_transparent.png)',
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    fontFamily: 'VPSans'
  }
}

const App = ({ classes }) => (
  <div className={classes.app}>
    <Header />
    <Search />
    <Results />
    <Footer />
  </div>
)

export default injectSheet(styles)(App);
