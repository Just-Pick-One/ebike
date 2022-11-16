import { data } from '../../assets/ebike_data'

export const filterEbikes = (category, spec) => {
  // eslint-disable-next-line array-callback-return
  // const result = data.ebikes.filter((ebike) => { ebike[category] = spec })
  const result = []
  data.ebikes.forEach((ebike) => {
    if (ebike[category] === spec) {
      result.push(ebike)
    }
  }
  )
  return result
}
