import React from 'react'
import PropTypes from 'prop-types'

import Typography from '~/components/atoms/Typography'
import SpaceBox from '~/components/atoms/SpaceBox'

const WeatherListHeader = ({ title }) => (
  <SpaceBox>
    <Typography text={title} theme="white" scale={1.2} bold />
  </SpaceBox>
)

WeatherListHeader.propTypes = {
  title: PropTypes.string,
}

export default WeatherListHeader
