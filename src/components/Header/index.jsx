import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  wrapper: {
    color: 'white',
    textAlign: 'center',
    padding: '30px 0'
  },
  logo: {
    backgroundImage: 'url(./vpvoyage-logo.svg)',
    width: '250px',
    height: '50px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
    margin: '0 auto'
  },
  sentence: {
    margin: '13px 0 0 0',
    fontSize: '20px',
    color: 'white'
  }
}

const Header = ({ classes }) => (
  <div className={classes.wrapper}>
    <div className={classes.logo} />
    <p  className={classes.sentence}>Trouvez le séjour fait pour vous</p>
  </div>
)

export default injectSheet(styles)(Header)
