import styled from 'styled-components/native'

import { getColor } from '~/helpers/theme'

export const Box = styled.View`
  position: relative;
`

export const Search = styled.TextInput`
  padding-left: 20px;
  padding-right: 72px;
  border-radius: 16px;
  font-size: 20px;
  background-color: transparent;
  border: 1px solid ${getColor('white', 500)};
  color: ${getColor('white', 200)};
  height: 66px;
`

export const SearchIcon = styled.TouchableOpacity`
  position: absolute;
  right: 2px;
  top: 2px;
  bottom: 2px;
  width: 64px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`

export const Icon = styled.Image`
  width: 24px;
  height: 24px;
`

export const Loading = styled.ActivityIndicator``
