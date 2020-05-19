import styled, { css } from 'styled-components/native'

import theme, { getColor } from '~/helpers/theme'
import fonts from '~/helpers/fonts'

export const Text = styled.Text`
  font-size: 20px;
  font-family: ${fonts.regular};

  /* Text Scale */
  ${(props) =>
    props.scale &&
    css`
      font-size: ${16 * props.scale}px;
    `}

  /* Text Bold */
  ${(props) =>
    props.bold &&
    css`
      font-family: ${fonts.bold};
    `}

  /* Text theme color */
  ${(props) =>
    props.theme &&
    css`
      color: ${getColor(props.theme, props.brightness)};
    `}
`
