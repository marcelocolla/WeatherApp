import React from 'react'
import PropTypes from 'prop-types'

import { Box, Search, SearchIcon, Icon, Loading } from './styled'
const searchAssets = require('~/images/search.png')

const FieldSearch = ({ value, placeholder, loading, onSubmit, onChange }) => (
  <Box>
    <Search
      placeholder={placeholder}
      placeholderTextColor="rgba(255, 255, 255, 0.4)"
      value={value}
      onChangeText={onChange}
      onSubmitEditing={onSubmit}
    />

    <SearchIcon onPress={onSubmit}>
      {loading ? <Loading color="#fff" /> : <Icon source={searchAssets} resizeMode="stretch" />}
    </SearchIcon>
  </Box>
)

FieldSearch.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  loading: PropTypes.bool,
}

FieldSearch.defaultProps = {
  placeholder: 'Pesquisar por cidade',
  loading: false,
}

export default FieldSearch
