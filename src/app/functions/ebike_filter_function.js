import { data } from '../../assets/ebike_data'

export const filterEbikes = (category, spec, setStateFunc) => {
  // eslint-disable-next-line array-callback-return
  // const result = data.ebikes.filter((ebike) => { ebike[category] = spec })
  const result = []
  data.ebikes.forEach((ebike) => {
    if (ebike[category].toString() === spec) {
      result.push(ebike)
    }
  }
  )
  setStateFunc(result)
}

export const cleanSingleEbikeData = (ebike) => {
  const cleanedEbike = { ...ebike }
  delete cleanedEbike.id
  delete cleanedEbike.archive
  delete cleanedEbike.image_url
  delete cleanedEbike.website
  return cleanedEbike
}
