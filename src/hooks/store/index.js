import React, { createContext, useContext, useMemo, useState, useEffect } from 'react'
import { Dimensions } from 'react-native'

import getDeviceInfo from '~/helpers/deviceInfo'

const stateForecast = {
  list: [],
  city: {},
}

const StoreContext = createContext()
const StoreProvider = ({ children }) => {
  const [query, setQuery] = useState({ text: '', loading: false })
  const [selected, setSelected] = useState({ id: null })
  const [forecast, updateForecast] = useState(stateForecast)
  const [app, setApp] = useState(getDeviceInfo())
  const setForecast = (data) => updateForecast({ ...forecast, ...data })

  useEffect(() => {
    const deviceUpdate = () => {
      const info = getDeviceInfo()
      setApp(info)
    }

    Dimensions.addEventListener('change', deviceUpdate)
  }, [])

  const providerValue = useMemo(
    () => ({
      app,
      query,
      forecast,
      selected,
      setForecast,
      setSelected,
      setQuery,
    }),
    [app, query, forecast, selected]
  )

  return <StoreContext.Provider value={providerValue}>{children}</StoreContext.Provider>
}
const useStore = () => useContext(StoreContext)

export { StoreContext, StoreProvider, useStore }
