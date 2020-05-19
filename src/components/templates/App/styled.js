import styled from 'styled-components/native'

import { theme, layout } from '~/helpers'

export const Main = styled.View`
  background-color: ${theme.primary['100']};
  flex: 1;
`

export const ContentMobile = styled.ScrollView`
  padding-bottom: ${layout.gutterLarge}px;
`

export const ContentTablet = styled.View`
  flex-direction: row;
  height: 100%;
`

export const ScrollView = styled.ScrollView`
  flex: 1;
  height: 100%;
`

export const TabletGrid = styled.View`
  flex: 1;
  flex-direction: row;
  padding: ${layout.gutter}px;
`
