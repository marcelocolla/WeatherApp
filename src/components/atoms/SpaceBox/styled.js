import styled, { css } from 'styled-components/native'

import { layout } from '~/helpers/ui'

export const Box = styled.View`
  padding: ${layout.gutter}px;

  ${(props) =>
    props.spaceBottom &&
    css`
      padding: 0px;
      padding-bottom: ${layout.gutter}px;
    `}
`
