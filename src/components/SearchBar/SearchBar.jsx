import React from 'react'
import { Search, Grid, Header, Icon } from 'semantic-ui-react'
import './SearchBar.scss'

const SearchBar = () => (
  <Header block>
    <Grid>
      <Grid.Column width={2} textAlign="center">
        <Icon name="basketball ball" size="big" color="orange" />
        <Header.Content>NBA PAIRS</Header.Content>
      </Grid.Column>
      <Grid.Column textAlign="center" width="10">
        <Search />
      </Grid.Column>
      <Grid.Column width={4} floated="left">
        <img
          className="searchbar-match-icon"
          src="//images.squarespace-cdn.com/content/v1/5f7c74b3ebc1ba132269c5a7/1611678115046-8C180XU5WIJ07PA60ADA/mach_8_logo_highlight_full.jpg?format=1500w"
          alt="Mach Eight, LLC"
        />
      </Grid.Column>
    </Grid>
  </Header>
)

export default SearchBar
