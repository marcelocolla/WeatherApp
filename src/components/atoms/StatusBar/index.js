import React from 'react'
import PropTypes from 'prop-types'
import { StatusBar } from 'react-native'

const StatusBarApp = ({ barStyle, ...rest }) => <StatusBar barStyle={barStyle} backgroundColor="#5D3A76" {...rest} />

StatusBarApp.propTypes = {
  barStyle: PropTypes.oneOf(['default', 'dark-content', 'light-content']),
}

StatusBarApp.defaultProps = {
  barStyle: 'light-content',
}

export default StatusBarApp
