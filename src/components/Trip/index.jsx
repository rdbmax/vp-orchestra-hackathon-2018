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
      <img style={{ width: '20px' }} src={`${process.env.PUBLIC_URL}/img/filters/SecuriteRose.png`} />
      <div> Pays sûr </div>
    </div>
  )
}

const Trip = ({ trip: { offerDescription: trip, departureDates: depatures }, classes }) => (
  <div className={classes.wrapper}>
    {trip.label} {ratingImgs(trip.stars)}
    <div>
      <img src={`${process.env.PUBLIC_URL}/img/product/PinLocation.png`} />
      <div>{trip.address} <b>{trip.country}</b></div>
      <div > À partir de {Math.min.apply(Math, depatures.map(depature => depature.price))}€/pers</div>
    </div>
    <div>
      <div>Note Tripadvisor</div>
      <div>
        <img
          src={`http://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/${trip.tripadvisor.rating.toFixed(1)}-MCID-5.png`}
          alt='tripadvisor ratings'
        />
        <div className={classes.opinions}> {trip.tripadvisor.opinions} avis </div>
      </div>
    </div>
    <div>
      <img className={classes.picture} src={trip.image} alt={trip.label} />
      <div>
        {trip.description}
      </div>
      <div>
        <img style={{ width: '20px' }} src={`${process.env.PUBLIC_URL}/img/filters/VilleDepartRose.png`} />
        <div> { listDepaturesCities(depatures) } </div>
      </div>
      <div>
        <img style={{ width: '20px' }} src={`${process.env.PUBLIC_URL}/img/filters/ActivitesRose.png`} />
        <div> { listTripActivities(trip) } </div>
      </div>
      <div>
        <img style={{ width: '20px' }} src={`${process.env.PUBLIC_URL}/img/filters/ClimatRose.png`} />
        <div> { weatherLabel(depatures) } </div>
      </div>
      <div>
        <img style={{ width: '20px' }} src={`${process.env.PUBLIC_URL}/img/filters/TemperatureRose.png`} />
        <div> { temperatureLabel(depatures) } </div>
      </div>
      <div>
        <img style={{ width: '20px' }} src={`${process.env.PUBLIC_URL}/img/filters/SaisonnaliteRose.png`} />
        <div> { saisonalityLabel(depatures) } </div>
      </div>
      { trip.security && securityBlock()}
    </div>
  </div>
)

export default injectSheet(styles)(Trip)
