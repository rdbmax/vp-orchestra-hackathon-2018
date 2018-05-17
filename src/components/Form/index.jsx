import React, { Component } from 'react'
import injectSheet from 'react-jss'
import Mood from './Mood'
import SecondForm from './SecondForm'
import GroupType from './GroupType'

const mapWidth = 1024

const styles = {
  wrapper: {
    width: '330px',
    position: 'absolute',
    left: `calc(50% - ${mapWidth / 2}px + 10px)`,
    top: '50px',
    zIndex: 2
  },
  main: {
    padding: '20px',
    backgroundColor: 'rgb(247, 247, 247)',
    color: 'white',
    borderRadius: '3px',
    minHeight: '320px'
  },
  title: {
    color: 'black',
    fontFamily: 'VPCondensed',
    fontSize: '22px',
    margin: 0
  }
}

class Form extends Component {
  state = {
    isOpenSecond: false
  }

  toggleSecondForm = () => {
    this.setState(({ isOpenSecond }) => ({ isOpenSecond: !isOpenSecond }))
  }

  render() {
    const { classes } = this.props
    const { isOpenSecond } = this.state

    return (
      <div className={classes.wrapper}>
        <div className={classes.main}>
          <p className={classes.title}>Votre recherche :</p>

          <GroupType />
          <Mood />
        </div>

        <SecondForm isOpen={isOpenSecond} ontoggleForm={this.toggleSecondForm} />
      </div>
    )
  }
}

export default injectSheet(styles)(Form)
