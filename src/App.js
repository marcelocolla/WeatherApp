import React from 'react'

import StatusBarApp from '~/components/atoms/StatusBar'
import { StoreProvider } from './hooks/store'
import Main from './navigations/Main'

const App = () => (
  <>
    <StatusBarApp />
    <StoreProvider>
      <Main />
    </StoreProvider>
  </>
)

export default App
