import styled, { css } from 'styled-components/native'

import { layout } from '~/helpers/ui'
import { getColor } from '~/helpers/theme'

export const Empty = styled.View`
  flex: 1;
  border-radius: 16px;
`

export const Box = styled(Empty)`
  background-color: ${getColor('white')};
  justify-content: space-between;
`

export const BoxHeader = styled.View`
  padding: ${layout.gutterLarge}px;
`

export const BoxInfo = styled.View`
  border: 0 solid ${getColor('black', 600)};
  border-top-width: 1px;
  padding: ${layout.gutter}px;
`
