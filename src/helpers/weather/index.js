const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

const parseData = (item, date, hours) => {
  const { dt, dt_txt, weather, ...rest } = item
  const now = new Date(date)
  const year = now.getFullYear().toString().substr(-2)
  const month = months[now.getMonth()]

  return {
    id: String(dt),
    temperature: Number(rest.main.temp).toFixed(1),
    date: {
      day: days[now.getDay()],
      label: `${hours.slice(0, 5)} ${month} ${year}`,
      dt_txt,
    },
    weather: weather[0],
    ...rest,
  }
}

const getSunrise = ({ sunrise, timezone }) => {
  const tz = String(timezone).slice(1, 3)
  let hour = String(sunrise).slice(0, 2)
  let minute = String(sunrise).slice(2, 4)

  if (minute >= 60) {
    hour = Number(hour) + 1
    minute = minute % 60
  }

  return `0${hour - tz}:${minute}`
}

const transformOutput = (list) => {
  const mapDaily = []
  const output = []

  list.forEach((item) => {
    const [date, hours] = item.dt_txt.split(' ')

    if (!mapDaily.includes(date)) {
      const data = parseData(item, date, hours)

      mapDaily.push(date)
      output.push(data)
    }
  })

  return output.splice(0, 7)
}

export { getSunrise }
export default transformOutput
