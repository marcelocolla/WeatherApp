import React from 'react'
import PropTypes from 'prop-types'

import Typography from '~/components/atoms/Typography'
import { Box } from './styled'

const Welcome = ({ title, subTitle }) => (
  <Box>
    <Typography text={title} scale={1.6} theme="white" />
    <Typography text={subTitle} bold scale={1.8} theme="white" />
  </Box>
)

Welcome.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
}

Welcome.defaultProps = {
  title: 'Seja bem vindo',
  subTitle: 'Selecione uma Cidade',
}

export default Welcome
