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
  opinions: {
    textDecoration: 'underline'
  }
}

const ratingImgs = ( stars ) => {
  const arrTmp = Array.apply(null, {length: stars}).map(Number.call, Number)

  return arrTmp.map((elmt, index) => <img
    key={`star-${index}`}
    src={process.env.PUBLIC_URL + '/img/product/Etoile.png'}
    style={{ width: '20px' }}
  />)
}

const Trip = ({ trip: { offerDescription: trip, departureDates: depatures }, classes }) => (
  <div className={classes.wrapper}>
    {trip.label} {ratingImgs(trip.stars)}
    <div>
      <img src={process.env.PUBLIC_URL + '/img/product/PinLocation.png'} />
      <div> {trip.address} <b>{trip.country}</b> </div>
      <div > À partir de {Math.min.apply(Math, depatures.map(depature => depature.price))}€/pers</div>
    </div>
    <div>
      <div>Note Tripadvisor</div>
      <div>
        <img src={`http://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/${trip.tripadvisor.rating.toFixed(1)}-MCID-5.png`}></img>
        <div className={classes.opinions}> {trip.tripadvisor.opinions} avis </div>
      </div>
    </div>
    <div>
      <img className={classes.picture} src={trip.image} alt={trip.label} />
      <div>
        {trip.description}
      </div>
    </div>
  </div>
)

export default injectSheet(styles)(Trip)
