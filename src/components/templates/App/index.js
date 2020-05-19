import React from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView } from 'react-native'

import { useStore } from '~/hooks/store'
import TemplateLayout from './layout'
import { Main, ContentTablet, ContentMobile } from './styled'

const TemplateApp = ({ children }) => {
  const { app } = useStore()
  const ContentLayout = app.hasLandscape && app.hasLargeDevice ? ContentTablet : ContentMobile

  return (
    <Main>
      <SafeAreaView>
        <ContentLayout>{children}</ContentLayout>
      </SafeAreaView>
    </Main>
  )
}

TemplateApp.propTypes = {
  children: PropTypes.node.isRequired,
}

TemplateApp.defaultProps = {}

export { TemplateLayout }
export default TemplateApp
