import React from 'react'
import './SearchBar.scss'
import { FaSearch } from 'react-icons/fa'
import useForm from '../../hooks/UseForm/useForm'
import useSearchPairs from '../../hooks/UseSearchPairs/useSearchPairs'

const SearchBar = () => {
  const [values, handleInputChange, reset] = useForm({
    search: ''
  })

  const { searh } = useSearchPairs()

  const handleSubmit = e => {
    e.preventDefault()
    searh(values.search)
    reset()
  }
  return (
    <form
      onSubmit={e => {
        handleSubmit(e)
      }}
      className="a-header__SearchBar"
    >
      <input
        name="search"
        type="text"
        placeholder="Enter number"
        value={values.search}
        onChange={handleInputChange}
      />
      <button type="submit">
        <FaSearch />
      </button>
    </form>
  )
}

export default SearchBar
