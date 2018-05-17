import React, { Component } from 'react'
import injectSheet from 'react-jss'
import Arrow from '../Arrow'
import Activities from '../Activities'
import DepartureCities from '../DepartureCities'
import AvgTemperature from '../AvgTemperature'
import Saisonality from '../Saisonality'
import Security from '../Security'

const icon = {
  width: '30px',
  height: '30px',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat'
}

const styles = {
  wrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    position: 'absolute',
    top: 0,
    right: ({ isOpen }) => (isOpen) ? '-250px' : '-50px',
    zIndex: -1,
    transition: 'right 0.3s ease',
    borderBottomRightRadius: '5px',
    borderTopRightRadius: '5px',
    padding: '20px 3px 20px 20px'
  },
  leftCol: {
    color: 'white',
    width: '200px',
    display: 'inline-block',
    verticalAlign: 'top'
  },
  title: {
    margin: 0
  },
  rightCol: {
    width: '30px',
    display: 'inline-block',
    verticalAlign: 'top'
  },
  activities: {
    extend: icon,
    backgroundImage: 'url(img/filters/ActivitesGrisClair.png)'
  },
  departureCities: {
    extend: icon,
    backgroundImage: 'url(img/filters/VilleDepartGrisClair.png)'
  },
  avgTemperature: {
    extend: icon,
    backgroundImage: 'url(img/filters/TemperatureGrisClair.png)'
  },
  saisonality: {
    extend: icon,
    backgroundImage: 'url(img/filters/SaisonnaliteGris.png)'
  },
  security: {
    extend: icon,
    backgroundImage: 'url(img/filters/SecuriteGrisClair.png)'
  }
}

class SecondForm extends Component {
  state = { activeFilter: 'activities' }

  onClickArrow = () => {
    this.props.ontoggleForm()
  }

  onClickIcon = icon => () => {
    this.setState({ activeFilter: icon })
    this.props.ontoggleForm()
  }

  render() {
    const { classes, isOpen } = this.props

    return (
      <div className={classes.wrapper}>
        { isOpen && <div className={classes.leftCol}>
          <span className={classes.title}>Guide de recherche</span>
          <DepartureCities />
          <AvgTemperature />
          <Saisonality />
          <Security />
          <Activities />
        </div> }

        <div className={classes.rightCol}>
          <Arrow
            onClick={this.onClickArrow}
            isOpen={isOpen}
          />

          <div onClick={this.onClickIcon('departureCities')} className={classes.departureCities} />
          <div onClick={this.onClickIcon('avgTemperature')} className={classes.avgTemperature} />
          <div onClick={this.onClickIcon('saisonality')} className={classes.saisonality} />
          <div onClick={this.onClickIcon('security')} className={classes.security} />
          <div onClick={this.onClickIcon('activities')} className={classes.activities} />
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(SecondForm)
