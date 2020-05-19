import styled, { css } from 'styled-components/native'

import { layout } from '~/helpers/ui'
import { getColor } from '~/helpers/theme'

export const Box = styled.View`
  padding: ${layout.gutter}px;
  margin: ${layout.gutter}px;
  background-color: ${getColor('black', 600)};
  border-radius: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${(props) =>
    props.landscape &&
    css`
      width: 72px;
      flex-direction: column;
      padding: 6px;
      padding-top: 10px;
      padding-bottom: 16px;
    `}
`

export const Branding = styled.Image`
  width: 38px;
  height: 42px;
`

export const BoxHome = styled.View`
  justify-content: center;
  align-items: center;
`

export const IconHome = styled.Image`
  width: 36px;
  height: 28px;
`

export const BoxNow = styled.View`
  justify-content: center;
  align-items: center;
  min-width: 60px;
`
