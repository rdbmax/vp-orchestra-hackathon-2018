import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  wrapper: {
    borderTop: '1px solid rgb(166, 166, 166)',
    padding: '40px 45px'
    // position: 'relative'
  },
  picture: {
    width: '300px',
    border: '3px solid white',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.45)'
  },
  country: {
    fontWeight: '700',
  }
}

const Trip = ({ trip: { offerDescription: trip }, classes }) => (
  <div className={classes.wrapper}>
    { trip.label } 
    <div> { trip.stars } </div>
    <div>
      <img src={process.env.PUBLIC_URL + '/img/product/PinLocation.png'} />
      <div> { trip.address } </div>
      <div className={classes.country}> { trip.country } </div>
      <div > À partir de X€/pers</div>
    </div>
    
    <img className={classes.picture} src={trip.image} alt={trip.label} />
  </div>
)

export default injectSheet(styles)(Trip)
