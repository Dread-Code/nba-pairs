import React from 'react'
import { Grid } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import CardPairs from '../CardPairs/CardPairs'
import AlertCard from '../AlertCard/AlertCard'

const CardContainer = ({ players }) => (
  <div>
    {players?.length > 0 ? (
      <Grid doubling columns={3}>
        {players.map((playersPair, key) => (
          <Grid.Column width="2" key={key + 1}>
            <CardPairs playersPair={playersPair} />
          </Grid.Column>
        ))}
      </Grid>
    ) : (
      <AlertCard error="No matches found" />
    )}
  </div>
)

CardContainer.propTypes = {
  players: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired
}

export default CardContainer
