import React from 'react'
import injectSheet from 'react-jss'

const getImageRandomRotation = () => `rotate(${(-2 + (Math.floor(Math.random()*5)))}deg)`

const styles = {
  wrapper: {
    borderTop: '1px solid rgb(166, 166, 166)',
    padding: '35px 15px'
  },
  pictures: {
    width: '300px',
    display: 'inline-block',
    verticalAlign: 'top'
  },
  picture: {
    width: '300px',
    border: '3px solid white',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.45)',
  },
  description: {},
  label: {
    paddingTop: '10px',
    marginBottom: '15px'
  },
  opinions: {
    textDecoration: 'underline'
  },
  product: {
    position: 'relative',
    width: '100%',
    color: '#6C6C6C'
  },
  productLeft: {
    width: "690px",
    padding: "5px 10px"
  },
  productRight: {
    textAlign: 'right',
    position: 'absolute',
    right: 0,
    top: '10px'
  },
  productBottom: {
    width: '850px',
    marginTop: '40px'
  },
  tripAdvisor: {
    marginTop: '15px',
    color: '#6C6C6C',
  },
  price: {
    color: '#EF1D96',
    fontWeight: 'bold',
    fontSize: '23px',
  },
  picto: {
    width: 'calc(100% / 3)',
    display: 'inline-block',
    padding: '5px 10px',
    marginBottom: '5px',
    verticalAlign: 'top',
    boxSizing: 'border-box'
  },
  pictos: {
    width: '545px',
    display: 'inline-block',
    verticalAlign: 'top',
    paddingLeft: '20px',
    boxSizing: 'border-box'
  }
}

const ratingImgs = ( stars ) => {
  const arrTmp = Array.apply(null, {length: stars}).map(Number.call, Number)

  return arrTmp.map((elmt, index) => <img
    key={`star-${index}`}
    src={process.env.PUBLIC_URL + '/img/product/Etoile.png'}
    style={{ width: '10px' }}
    alt='rating star'
  />)
}

const listDepaturesCities = departures => {
  const allDepartureCities = departures.reduce((allCities, departure) => [...allCities, ...departure.departureCities], []);
  const listCities = [...new Set(allDepartureCities)];
  let listCitiesString;

  if (listCities.length <= 3) {
    listCitiesString = listCities.reduce((str, city) => str + ", " + city, "");
  } else {
    const tmpStr = listCities
      .slice(0, 3)
      .reduce((str, city) => str + ", " + city, "");
    listCitiesString = tmpStr + "...";
  }

  return listCitiesString.substr(2);
};

const listTripActivities = trip => {
  let activitiesStr

  if (trip.activities.length <= 3) {
    activitiesStr = trip.activities.reduce((str, activity) => str + ", " + activity, "")
  } else {
    activitiesStr = trip.activities.slice(0, 3).reduce((str, activity) => str + ", " + activity, "")
    activitiesStr += "..."
  }

  return activitiesStr.substr(2)
};

const weatherLabel = departures => departures[0].climate

const temperatureLabel = departures => {
  return departures[0].temperature.toString() + " °C"
}

const saisonalityLabel = departures => {
  return departures[0].saisonality + " saison"
}

const securityBlock = () => {
  return (
    <div>
      <img alt='safety trip icon' style={{ width: '20px' }} src={`${process.env.PUBLIC_URL}/img/filters/SecuriteRose.png`} />
      <div> Pays sûr </div>
    </div>
  )
}

const Trip = ({ trip: { offerDescription: trip, departureDates: depatures }, classes }) => (
  <div className={classes.wrapper}>

    <div className={classes.product}>

      <div className={classes.productLeft}>
        <p style={{ fontWeight: "bold", fontSize: "24px" }}>{trip.label} {ratingImgs(trip.stars)}</p>
        <p>
          <img src={`${process.env.PUBLIC_URL}/img/product/PinLocation.png`} width="15px" height="15px" alt='pin' />
          <span style={{ fontWeight: "bold", color: "#B7B7B7" }}> {trip.address}</span> <strong>{trip.country}</strong>
        </p>
      </div>

      <div class={classes.productRight}>
        <p class={classes.price}>À partir de {Math.min.apply(Math, depatures.map(depature => depature.price))}€/pers</p>
        <div className={classes.tripAdvisor}>
          <p>Note <strong>TripAdvisor</strong></p>
          <div>
            <img
              src={`http://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/${trip.tripadvisor.rating.toFixed(1)}-MCID-5.png`}
              alt='tripadvisor ratings'
            />
            <p className={classes.opinions}> {trip.tripadvisor.opinions} avis</p>
          </div>
        </div>
      </div>

      <div className={classes.productBottom}>
        <p className={classes.pictures} style={{ transform: getImageRandomRotation() }}>
          <img src={trip.image} className={classes.picture} alt={trip.label} />
        </p>

        <div className={classes.pictos}>
          <div className={classes.description}>
            <p className={classes.label}>{trip.description}</p>
          </div>
          <div className={classes.picto}>
            <img style={{ maxWidth: '20px', maxHeight: '20px' }} src={`${process.env.PUBLIC_URL}/img/filters/VilleDepartRose.png`} alt='departure city' />
            <div> {listDepaturesCities(depatures)} </div>
          </div>
          <div className={classes.picto}>
            <img style={{ maxWidth: '20px', maxHeight: '20px' }} src={`${process.env.PUBLIC_URL}/img/filters/ActivitesRose.png`} alt='activities' />
            <div> {listTripActivities(trip)} </div>
          </div>
          <div className={classes.picto}>
            <img style={{ maxWidth: '20px', maxHeight: '20px' }} src={`${process.env.PUBLIC_URL}/img/filters/ClimatRose.png`} alt='climate' />
            <div> {weatherLabel(depatures)} </div>
          </div>
          <div className={classes.picto}>
            <img style={{ maxWidth: '20px', maxHeight: '20px' }} src={`${process.env.PUBLIC_URL}/img/filters/TemperatureRose.png`} alt='temperature' />
            <div> {temperatureLabel(depatures)} </div>
          </div>
          <div className={classes.picto}>
            <img style={{ maxWidth: '20px', maxHeight: '20px' }} src={`${process.env.PUBLIC_URL}/img/filters/SaisonnaliteRose.png`} alt='saisonnality' />
            <div> {saisonalityLabel(depatures)} </div>
          </div>
          <div className={classes.picto}>{trip.security && securityBlock()}</div>
        </div>
      </div>
    </div>
  </div>
)

export default injectSheet(styles)(Trip)
