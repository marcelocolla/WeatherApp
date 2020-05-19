import React from 'react'
import PropTypes from 'prop-types'

import Typography from '~/components/atoms/Typography'
import Image from './image'
import { Header } from './styled'

const ForecastHeader = ({ label, icon, ...rest }) => (
  <Header>
    <Image icon={icon} />
    <Typography text={label} {...rest} />
  </Header>
)

ForecastHeader.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

ForecastHeader.defaultProps = {}

export default ForecastHeader
