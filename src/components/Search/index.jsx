import React from 'react'
import injectSheet from 'react-jss'
import Form from '../Form'
import Map from '../Map'

const styles = {

}

const Search = ({ classes }) => (
  <div>
    <Form />
    <Map />
  </div>
)

export default injectSheet(styles)(Search)
