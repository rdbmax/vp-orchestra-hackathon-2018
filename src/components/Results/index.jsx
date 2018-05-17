import React from 'react'
import injectSheet from 'react-jss'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { getFilteredTrips } from '../../store/selectors'
import Trip from '../Trip'

const mapStateToProps = state => ({
  trips: getFilteredTrips(state)
})

const styles = {
  wrapper: {
    width: '1024px',
    margin: '50px auto 0 auto',
  }
}

const Results = ({ trips, classes }) => (
  <div className={classes.wrapper}>
    { trips.map(trip => <Trip key={trip.offerDescription.label} trip={trip} />) }
  </div>
)

export default compose(
  connect(mapStateToProps),
  injectSheet(styles)
)(Results)
