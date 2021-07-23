import React from 'react'
import { Card } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const CardPairs = ({ playersPair }) => (
  <>
    {playersPair.map(player => {
      const header = `${player.first_name} ${player.last_name}`

      return (
        <Card key={header}>
          <Card.Content className="title" header={header} />
          <Card.Content className="description" description={player.h_in} />
        </Card>
      )
    })}
  </>
)

CardPairs.propTypes = {
  playersPair: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CardPairs
