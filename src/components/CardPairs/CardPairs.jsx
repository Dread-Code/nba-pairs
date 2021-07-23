import React from 'react'
import { Card } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const CardPairs = ({ playersPair }) => (
  <>
    {playersPair.map(player => (
      <Card key={player.header + player.length}>
        <Card.Content className="title" header={player.header} />
        <Card.Content className="description" description={player.description} />
      </Card>
    ))}
  </>
)

CardPairs.propTypes = {
  playersPair: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CardPairs
