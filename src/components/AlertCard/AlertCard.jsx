import React from 'react'
import { Card } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import './AlertCard.scss'

const AlertCard = ({ error }) => (
  <Card>
    <Card.Content className="alert-card" header="Alert" />
    <Card.Content className="alert-card" description={error} />
  </Card>
)
AlertCard.propTypes = {
  error: PropTypes.string.isRequired
}

export default AlertCard
