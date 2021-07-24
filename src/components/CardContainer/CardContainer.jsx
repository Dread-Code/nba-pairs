import React from 'react'
import { Grid } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import CardPairs from '../CardPairs/CardPairs'
import AlertCard from '../AlertCard/AlertCard'
import './CardContainer.scss'

const CardContainer = ({ players }) => (
  <div>
    {players?.length > 0 ? (
      <Grid doubling columns={2} padded={1}>
        {players.map((playersPair, key) => (
          <div className="cardpaircontainer">
            <Grid.Column width="2" key={key + 1}>
              <CardPairs playersPair={playersPair} />
            </Grid.Column>
          </div>
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
