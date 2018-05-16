import React from 'react'
import injectSheet from 'react-jss'
import Form from '../Form'
import Map from '../Map'

const styles = {
  wrapper: {
    position: 'relative'
  },
  mapContainter: {
    margin: '0 auto',
    width: '1024px',
    height: '400px'
  },
  mapElement: {
    height: '100%'
  }
}

const Search = ({ classes }) => (
  <div className={classes.wrapper}>
    <Form />
    <Map
      googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'
      loadingElement={<div className={classes.mapContainter} />}
      containerElement={<div className={classes.mapContainter} />}
      mapElement={<div className={classes.mapElement} />}
    />
  </div>
)

export default injectSheet(styles)(Search)
