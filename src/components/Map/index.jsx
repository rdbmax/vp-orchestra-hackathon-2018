import React from 'react'
import injectSheet from 'react-jss'
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { getFilteredTrips } from '../../store/selectors'

const mapStateToProps = state => ({
  trips: getFilteredTrips(state)
})

const styles = {

}

const Map = ({ trips, classes }) => (
  <GoogleMap
    defaultZoom={4}
    defaultCenter={{ lat: 45.954976, lng: -10.501562 }}
    options={{
      scrollwheel: false,
      streetViewControl: false,
      fullscreenControl: false
    }}
  >
    { trips && trips.map(({ offerDescription: { label, latitude, longitude } }) => (
      <Marker key={label} position={{ lat: latitude, lng: longitude }} />)
    ) }
  </GoogleMap>
)

export default compose(
  connect(mapStateToProps),
  injectSheet(styles),
  withScriptjs,
  withGoogleMap
)(Map)
