import React from 'react'
import PropTypes from 'prop-types'

import { Text } from './styled'

const Typography = ({ text, children, ...rest }) => <Text {...rest}>{text || children}</Text>

Typography.propTypes = {
  text: PropTypes.any,
  children: PropTypes.node,
  bold: PropTypes.bool,
  scale: PropTypes.number,
  theme: PropTypes.oneOf(['black', 'white', 'grey', 'primary', 'accent']),
  brightness: PropTypes.oneOf(['100', '200', '300', '400', '500', '600']),
}

Typography.defaultProps = {
  text: null,
  children: null,
  scale: 1,
  theme: 'black',
  brightness: '100',
}

export default Typography
