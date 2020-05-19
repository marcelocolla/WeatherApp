import React from 'react'
import PropTypes from 'prop-types'

import { Box } from './styled'

const SpaceBox = ({ children, ...rest }) => <Box {...rest}>{children}</Box>

SpaceBox.propTypes = {
  children: PropTypes.node.isRequired,
  spaceBottom: PropTypes.bool,
}

SpaceBox.defaultProps = {
  spaceBottom: false,
}

export default SpaceBox
