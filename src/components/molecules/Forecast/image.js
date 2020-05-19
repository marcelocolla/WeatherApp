import React from 'react'

import getImageWeather from '~/helpers/storage'
import { Image } from './styled'

const ForecastImage = ({ icon }) => <Image source={{ uri: getImageWeather(icon) }} resizeMode="contain" />

export default ForecastImage
