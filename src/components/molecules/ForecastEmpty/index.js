import React from 'react'
import PropTypes from 'prop-types'

import Typography from '~/components/atoms/Typography'
import { Box, Image } from './styled'
const emptyAssets = require('~/images/empty.png')

const ForecastEmpty = ({ message }) => (
  <Box>
    <Image source={emptyAssets} resizeMode="stretch" />
    <Typography text={message} theme="white" scale={1.4} bold />
    <Typography text="Pesquise por nomes de cidades do Brasil!" theme="white" brightness="200" />
  </Box>
)

ForecastEmpty.propTypes = {
  message: PropTypes.string.isRequired,
}

export default ForecastEmpty
