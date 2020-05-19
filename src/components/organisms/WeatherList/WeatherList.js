import React from 'react'
import PropTypes from 'prop-types'

import ForecastCard from '~/components/molecules/Forecast'
import Header from './header'
import getOptions from './getOptions'
import { Box, FlatList } from './styled'

const WeatherList = ({ deviceInfo, title, data, selected, onHandler }) => {
  const options = getOptions(deviceInfo)
  const isSelected = (id) => selected.id === id
  const renderItem = ({ item }) => (
    <ForecastCard data={item} onHandler={() => onHandler(item)} active={isSelected(item.id)} />
  )

  return (
    <Box>
      <Header title={title} />

      <FlatList {...options} data={data} renderItem={renderItem} keyExtractor={(item) => `forecast-card-${item.id}`} />
    </Box>
  )
}

WeatherList.propTypes = {
  data: PropTypes.array.isRequired,
  selected: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
  title: PropTypes.string,
  deviceInfo: PropTypes.object,
}

WeatherList.defaultProps = {
  title: 'Previsão para semana:',
  deviceInfo: {},
}

export default WeatherList
