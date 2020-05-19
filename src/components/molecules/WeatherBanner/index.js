import React from 'react'
import PropTypes from 'prop-types'

import Typography from '~/components/atoms/Typography'
import { Box, Banner } from './styled'
const bgAssets = require('~/images/cloud-background.png')

const WeatherBanner = ({ temperature, label, info }) => (
  <Box source={bgAssets}>
    <Banner>
      <Typography text={temperature} scale={5.8} bold />
      <Typography text="°C" bold scale={2} />
    </Banner>

    <Typography text={label} theme="primary" bold />
    <Typography text={info} theme="primary" bold />
  </Box>
)

WeatherBanner.propTypes = {
  temperature: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
}
export default WeatherBanner
