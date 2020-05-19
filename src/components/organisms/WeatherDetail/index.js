import React from 'react'

import { useStore } from '~/hooks/store'
import WeatherHeader from '~/components/molecules/WeatherHeader'
import WeatherBanner from '~/components/molecules/WeatherBanner'
import TextGroup from '~/components/atoms/TextGroup'
import { Box, BoxHeader, BoxInfo, Empty } from './styled'

const WeatherDetail = () => {
  const { forecast, selected } = useStore()
  const { weather, temperature, date } = selected || {}
  const { name = '', coord = {}, sunrise } = forecast.city || {}

  if (!forecast || !selected.id) {
    return <Empty />
  }

  return (
    <Box>
      <BoxHeader>
        <WeatherHeader city={name} label={date.day} icon={weather.icon} />
      </BoxHeader>

      <WeatherBanner temperature={temperature} label={weather.description} info={date.label || ''} />

      <BoxInfo>
        <TextGroup label="Vento" value={`Briza suave, ${selected.wind.speed} m/s, East (${selected.wind.deg})`} />
        <TextGroup label="Nebulosidade" value={selected.weather.description} />
        <TextGroup label="Pressão" value={`${selected.main.pressure} hpa`} />
        <TextGroup label="Umidade" value={`${selected.main.humidity}%`} />
        <TextGroup label="Nascer do sol" value={sunrise} />
        <TextGroup label="Coordenadas geo" value={`[${coord.lat}, ${coord.lon}]`} />
      </BoxInfo>
    </Box>
  )
}

export default WeatherDetail
