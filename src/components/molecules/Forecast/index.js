import React, { useRef, useState, useEffect } from 'react'
import { Animated, Easing } from 'react-native'
import PropTypes from 'prop-types'

import Typography from '~/components/atoms/Typography'
import Header from './header'
import { Box, Content, Line } from './styled'

const textColor = {
  theme: 'white',
  brightness: '300',
}

const ForecastCard = ({ data, onHandler, active }) => {
  const [animated, setAnimated] = useState({ width: new Animated.Value(0) })
  const { temperature, wind, date, clouds, weather } = data

  useEffect(() => {
    const endWidth = active ? 100 : 0

    Animated.timing(animated.width, {
      toValue: endWidth,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start()
  }, [active])

  return (
    <Box activeOpacity={0.6} onPress={onHandler} active={active}>
      <Header label={String(date.day).toLocaleUpperCase()} icon={weather.icon} {...textColor} />

      <Content>
        <Typography text={`${temperature}°C`} theme="white" scale={1.4} bold />
        <Typography text={`${wind.speed} m/s`} {...textColor} />
        <Typography text={`nuvens: ${clouds.all}%`} {...textColor} />
      </Content>

      <Animated.View
        style={{
          width: animated.width.interpolate({
            inputRange: [0, 100],
            outputRange: ['42%', '100%'],
          }),
        }}>
        <Line active={active} />
      </Animated.View>
    </Box>
  )
}

ForecastCard.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string,
  }).isRequired,
  onHandler: PropTypes.func.isRequired,
  active: PropTypes.bool,
}

ForecastCard.defaultProps = {
  active: false,
}

export default ForecastCard
