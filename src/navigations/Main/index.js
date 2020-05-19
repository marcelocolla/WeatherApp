import React from 'react'

import { useStore } from '~/hooks/store'
import TemplateApp, { TemplateLayout } from '~/components/templates/App'
import SpaceBox from '~/components/atoms/SpaceBox'
import AppHeader from '~/components/molecules/AppHeader'
import Welcome from '~/components/molecules/Welcome'
import WeatherSearch from '~/components/organisms/WeatherSearch'
import WeatherList from '~/components/organisms/WeatherList'
import WeatherDetail from '~/components/organisms/WeatherDetail'

import { ContentTablet, ContentMobile } from './styled'

const Main = () => {
  const { app } = useStore()
  const LayoutContent = app.hasLandscape && app.hasLargeDevice ? ContentTablet : ContentMobile

  return (
    <TemplateApp>
      <AppHeader deviceInfo={app} />

      <TemplateLayout>
        <LayoutContent>
          <SpaceBox>
            <Welcome />
            <WeatherSearch />
          </SpaceBox>

          <WeatherList />
        </LayoutContent>

        <WeatherDetail />
      </TemplateLayout>
    </TemplateApp>
  )
}

export default Main
