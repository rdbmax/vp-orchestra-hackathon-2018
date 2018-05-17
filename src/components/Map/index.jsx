import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps'
import { MAP } from 'react-google-maps/lib/constants'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { getFilteredTrips } from '../../store/selectors'

const mapStateToProps = state => ({
  trips: getFilteredTrips(state)
})

class Map extends Component {
  static contextTypes = { [MAP]: PropTypes.object }

  componentDidMount() {
    this.context[MAP].fitBounds(this.getLatLngBoundsLiteral())
  }

  componentDidUpdate({ trips }) {
    if (trips !== this.props.trips)
      this.context[MAP].fitBounds(this.getLatLngBoundsLiteral())
  }

  getLatLngBoundsLiteral = () => {
    const { trips } = this.props

    const south = trips.reduce((southValue, trip) => {
      if (!southValue)
        return trip.offerDescription.latitude
      else
        return (trip.offerDescription.latitude < southValue)
          ? trip.offerDescription.latitude
          : southValue
    }, undefined)

    const north = trips.reduce((northValue, trip) => {
      if (!northValue)
        return trip.offerDescription.latitude
      else
        return (trip.offerDescription.latitude > northValue)
          ? trip.offerDescription.latitude
          : northValue
    }, undefined)

    const west = trips.reduce((westValue, trip) => {
      if (!westValue)
        return trip.offerDescription.longitude
      else
        return (trip.offerDescription.longitude < westValue)
          ? trip.offerDescription.longitude
          : westValue
    }, undefined)

    const east = trips.reduce((eastValue, trip) => {
      if (!eastValue)
        return trip.offerDescription.longitude
      else
        return (trip.offerDescription.longitude > eastValue)
          ? trip.offerDescription.longitude
          : eastValue
    }, undefined)

    return { south, west, north, east }
  }

  render() {
    const { trips } = this.props

    return (
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
  }
}

export default compose(
  connect(mapStateToProps),
  withScriptjs,
  withGoogleMap
)(Map)
