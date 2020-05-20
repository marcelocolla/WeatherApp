import styled, { css } from 'styled-components/native'

import { layout } from '~/helpers'
import { getColor } from '~/helpers/theme'

export const Box = styled.TouchableOpacity`
  flex: 1;
  justify-content: space-between;
  min-height: 190px;
  min-width: 140px;
  margin-horizontal: ${layout.gutter}px;
  margin-bottom: ${layout.gutter}px;
  padding-top: ${layout.gutterLarge}px;
  padding-horizontal: ${layout.gutterLarge}px;
  border: 1px solid ${getColor('white', 300)};
  border-radius: 30px;

  ${(props) =>
    props.active &&
    css`
      border-color: transparent;
      background-color: ${getColor('primary', 300)};
    `}
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: ${layout.gutterLarge}px;
`

export const Content = styled.View``

export const Image = styled.Image`
  width: 42px;
  height: 36px;
`

export const Line = styled.View`
  transform: translateY(1px);
  width: 100%;
  height: 3px;
  background-color: ${getColor('accent', 200)};
`
