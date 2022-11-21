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
  cleanedEbike.colors = cleanedEbike.colors.join(', ')
  cleanedEbike.accessories = cleanedEbike.accessories.join(', ')
  cleanedEbike.style = cleanedEbike.style.join(', ')

  if (cleanedEbike.torque_max_nm === -1) cleanedEbike.torque_max_nm = 'No Data'

  if (cleanedEbike.controller_a === -1) cleanedEbike.controller_a = 'No Data'

  return cleanedEbike
}
