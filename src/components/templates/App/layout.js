import React from 'react'

import { useStore } from '~/hooks/store'
import { ScrollView, TabletGrid } from './styled'

const TemplateLayout = ({ children }) => {
  const { app } = useStore()

  if (app.hasLandscape && app.hasLargeDevice) {
    return (
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <TabletGrid>{children}</TabletGrid>
      </ScrollView>
    )
  }

  return <ScrollView>{children}</ScrollView>
}

export default TemplateLayout
