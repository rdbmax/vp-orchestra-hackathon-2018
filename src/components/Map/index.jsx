import React from 'react'
import injectSheet from 'react-jss'
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps"

const styles = {

}

const Map = ({ markers = [], classes }) => (
  <GoogleMap
    defaultZoom={4}
    defaultCenter={{ lat: 45.954976, lng: -10.501562 }}
  >
    { markers && markers.map(() => (<Marker position={{ lat: -34.397, lng: 150.644 }} />)) }
  </GoogleMap>
)

export default injectSheet(styles)(withScriptjs(withGoogleMap(Map)))
