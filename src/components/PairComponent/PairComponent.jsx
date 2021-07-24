import React, { useContext } from 'react'
import { Container, Divider } from 'semantic-ui-react'
import { PlayerContext } from '../../Context/PlayersContext'
import CardContainer from '../CardContainer/CardContainer'
import './PairComponent.scss'

const PairComponent = () => {
  const { playerPairs } = useContext(PlayerContext)
  return (
    <section className="paircomponent-container">
      <Container className="paircomonent-title">Matches</Container>
      <Divider section />
      <CardContainer players={playerPairs} />
    </section>
  )
}

export default PairComponent
