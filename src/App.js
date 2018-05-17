import React, { Component } from 'react';
import injectSheet from 'react-jss'
import Konami from 'react-konami'
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
  },
  konami: {
    width: '70vw',
    position: 'fixed',
    top: '60px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 20
  }
}

class App extends Component {
  state = { easterEgg: false }

  handleOpen = () => {
    this.setState({ easterEgg: true })
  }

  render() {
    const { classes } = this.props
    const { easterEgg } = this.state

    return (
      <div className={classes.app}>
        <Header />
        <Search />
        <Results />
        <Footer />
        <Konami easterEgg={this.handleOpen} />
        { easterEgg && <img
          className={classes.konami}
          src='https://media.giphy.com/media/mL9IJaVKMQj3q/giphy.gif'
          alt='konami'
        /> }
      </div>
    )
  }
}

export default injectSheet(styles)(App);
