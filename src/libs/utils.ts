export const convDate = (date: string) => {
  const year = Number(date.substring(0, 4))
  const month = Number(date.substring(5, 7))
  const day = Number(date.substring(8, 10))
  const hour = Number(date.substring(11, 13))
  const minit = Number(date.substring(14, 16))
  const second = Number(date.substring(17, 19))
  const d = new Date(year, month, day, hour, minit, second)
  const result = d.toString().substring(4, 24).replace(/\s/g, ',')
  return result
}

export const pickData = (data: any[], id: number) => {
  const pick = data.filter((d: any) => {
    return d.id === id
  })

  return pick[0]
}
