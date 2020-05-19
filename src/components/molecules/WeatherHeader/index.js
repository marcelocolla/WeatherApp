import React from 'react'
import PropTypes from 'prop-types'

import getImageWeather from '~/helpers/storage'
import Typography from '~/components/atoms/Typography'
import { Box, Content, Image } from './styled'

const WeatherHeader = ({ label, city, icon }) => (
  <Box>
    <Content>
      <Typography text={label} />
      <Typography text={city} bold scale={1.4} />
    </Content>

    <Image source={{ uri: getImageWeather(icon, true) }} resizeMode="contain" />
  </Box>
)

WeatherHeader.propTypes = {
  label: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

WeatherHeader.defaultProps = {}

export default WeatherHeader
