import { Dimensions } from 'react-native'

const getDeviceInfo = () => {
  const { width, height } = Dimensions.get('window')
  const getLargeDevice = (size) => size > 680

  if (width < height) {
    return { orientation: 'portrait', hasLandscape: false, hasLargeDevice: getLargeDevice(width) }
  }

  return { orientation: 'landscape', hasLandscape: true, hasLargeDevice: getLargeDevice(height) }
}

export default getDeviceInfo
