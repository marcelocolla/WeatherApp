import React, { memo, useEffect } from 'react'

import { WeatherAPI } from '~/services'
import transformOutput, { getSunrise } from '~/helpers/weather'
import WeatherListComponent from './WeatherList'
import ForecastEmpty from '~/components/molecules/ForecastEmpty'
import { useStore } from '~/hooks/store'

const WeatherList = (props) => {
  const { app, query, forecast, setForecast, selected, setSelected, setQuery } = useStore()
  const showItemDetails = (item) => setSelected(item)
  const fetchApi = async () => {
    const params = {
      q: `${query.text},br`,
    }

    try {
      const result = await WeatherAPI.get('/forecast', { params })
      const { city, list } = result.data
      const output = transformOutput(list)
      const sunrise = getSunrise(city)

      setSelected(output[0])
      setForecast({ city: { ...city, sunrise }, list: output })
    } catch (e) {
      setSelected({ id: '' })
      setForecast({ city: {}, list: [] })
    }

    setQuery({ ...query, loading: false })
  }

  useEffect(() => {
    if (query.text) {
      fetchApi()
    }
  }, [query.text])

  if (!forecast.list.length && !query.loading && query.text) {
    return <ForecastEmpty message={`"${query.text}" cidade não encontrada.`} />
  } else if (!forecast.list.length) {
    return null
  }

  console.log('#### total', forecast.list.length)

  return (
    <WeatherListComponent
      {...props}
      deviceInfo={app}
      data={forecast.list}
      selected={selected}
      onHandler={showItemDetails}
    />
  )
}

export default memo(WeatherList)
