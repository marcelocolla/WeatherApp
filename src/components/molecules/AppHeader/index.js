import React from 'react'
import PropTypes from 'prop-types'

import CurrentDate from './currentDate'
import { Box, Branding, BoxHome, IconHome } from './styled'

const linxAssets = require('~/images/logo.png')
const homeAssets = require('~/images/home.png')

const AppHeader = ({ deviceInfo }) => (
  <Box landscape={deviceInfo.hasLandscape && deviceInfo.hasLargeDevice}>
    <Branding source={linxAssets} resizeMode="contain" />

    <BoxHome>
      <IconHome source={homeAssets} resizeMode="contain" />
    </BoxHome>

    <CurrentDate />
  </Box>
)

AppHeader.propTypes = {
  deviceInfo: PropTypes.shape({
    hasLandscape: PropTypes.bool,
    hasLargeDevice: PropTypes.bool,
  }).isRequired,
}

export default AppHeader
