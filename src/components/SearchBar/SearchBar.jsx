import React from 'react'
import { Form, Grid, Header, Icon } from 'semantic-ui-react'
import useForm from '../../hooks/UseForm/useForm'
import useSearchPairs from '../../hooks/UseSearchPairs/useSearchPairs'
import './SearchBar.scss'

const SearchBar = () => {
  const [values, handleInputChange, reset] = useForm({
    search: ''
  })
  const { searh } = useSearchPairs()

  const handlerSubmit = () => {
    searh(values.search)
    reset()
  }

  return (
    <Header block>
      <Grid doubling>
        <Grid.Column width={4} verticalAlign="middle">
          <Icon name="basketball ball" size="big" color="orange" />
          <Header.Content>NBA PAIRS</Header.Content>
        </Grid.Column>
        <Grid.Column textAlign="center" width={8}>
          <Form onSubmit={handlerSubmit}>
            <Form.Group>
              <Form.Input
                placeholder="Enter a Number"
                name="search"
                value={values.search}
                onChange={handleInputChange}
              />
              <Form.Button content="Search" />
            </Form.Group>
          </Form>
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
}

export default SearchBar
