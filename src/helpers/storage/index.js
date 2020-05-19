import { STORAGE_ASSETS } from '~/helpers'

const getFileName = (icon) => {
  switch (icon) {
    case '03n':
    case '04n':
      return 'overcast'
    case '09n':
    case '10n':
      return 'rain'
    case '11n':
      return 'tempest'
    default:
      return 'sun'
  }
}

const getImageWeather = (icon, primary = false) => {
  let filename = getFileName(icon)

  if (primary) {
    filename += '-primary'
  }

  return `${STORAGE_ASSETS}/${filename}.png`
}

export default getImageWeather
