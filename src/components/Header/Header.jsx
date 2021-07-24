import React from 'react'
import { Grid, Header, Icon } from 'semantic-ui-react'
import SearchBar from '../SearchBar/SearchBar'
import './Header.scss'

const HeaderPair = () => (
  <Header block>
    <Grid doubling>
      <Grid.Column width={4} verticalAlign="middle">
        <Icon name="basketball ball" size="big" color="orange" />
        <Header.Content>NBA PAIRS</Header.Content>
      </Grid.Column>
      <Grid.Column textAlign="center" verticalAlign="middle" width={8}>
        <SearchBar />
      </Grid.Column>
      <Grid.Column width={4} floated="left">
        <a href="https://www.macheight.com/">
          <img
            className="searchbar-match-icon"
            src="//images.squarespace-cdn.com/content/v1/5f7c74b3ebc1ba132269c5a7/1611678115046-8C180XU5WIJ07PA60ADA/mach_8_logo_highlight_full.jpg?format=1500w"
            alt="Mach Eight, LLC"
          />
        </a>
      </Grid.Column>
    </Grid>
  </Header>
)

export default HeaderPair
