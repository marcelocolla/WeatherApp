import React, { useEffect, useState } from 'react'

import Typography from '~/components/atoms/Typography'
import { BoxNow } from './styled'

const CurrentDate = () => {
  const [current, setCurrent] = useState({ date: '', hour: '' })
  const updateCurrent = () => {
    const d = new Date()
    const minute = d.getMinutes()
    const formatMinute = minute > 9 ? minute : `0${minute}`
    const hour = `${d.getHours()}:${formatMinute}`
    const date = d.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'numeric',
    })

    setCurrent({ date, hour })
  }

  useEffect(() => {
    const timer = setInterval(updateCurrent, 1000)
    updateCurrent()

    return () => clearInterval(timer)
  }, [])

  return (
    <BoxNow>
      <Typography text={current.date} theme="white" scale={0.9} />
      <Typography text={current.hour} theme="white" scale={0.9} brightness="300" />
    </BoxNow>
  )
}

export default CurrentDate
