import themeDefault from './default'

const getTheme = () => themeDefault
const getColor = (color = 'black', brightness = '100') => {
  const theme = getTheme()
  const palette = theme[color] || theme['black']

  return palette[brightness] || palette['100']
}

export { getColor }
export default themeDefault
