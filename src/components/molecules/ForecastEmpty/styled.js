import styled from 'styled-components/native'

import { layout } from '~/helpers'

export const Box = styled.View`
  padding: ${layout.gutterLarge}px;
  justify-content: center;
  align-items: center;
`

export const Image = styled.Image`
  margin: ${layout.gutterLarge}px;
  width: 98px;
  height: 98px;
`
