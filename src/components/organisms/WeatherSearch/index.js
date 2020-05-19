import React, { useState, useEffect } from 'react'

import { useStore } from '~/hooks/store'
import SpaceBox from '~/components/atoms/SpaceBox'
import FieldSearch from '~/components/molecules/FieldSearch'

const WeatherSearch = () => {
  const { query, setQuery } = useStore()
  const [search, setSearch] = useState('')
  const onChange = (value) => setSearch(value)
  const onSubmit = () => {
    if (!query.loading && search) {
      setQuery({ loading: true, text: search })
    }
  }

  useEffect(() => {
    setSearch(query.text)
  }, [])

  return (
    <SpaceBox spaceBottom>
      <FieldSearch onChange={onChange} onSubmit={onSubmit} loading={query.loading} value={search} />
    </SpaceBox>
  )
}

export default WeatherSearch
