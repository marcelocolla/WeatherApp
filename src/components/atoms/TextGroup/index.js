import React from 'react'
import PropTypes from 'prop-types'

import Typography from '~/components/atoms/Typography'
import { Box } from './styled'

const TextGroup = ({ label, value }) => (
  <Box>
    <Typography text={label} theme="primary" bold scale={0.9} />
    <Typography text={value} theme="grey" bold scale={0.9} brightness="100" />
  </Box>
)

TextGroup.propTypes = {
  label: PropTypes.any,
  value: PropTypes.any,
}

TextGroup.defaultProps = {
  label: '',
  value: '',
}

export default TextGroup
