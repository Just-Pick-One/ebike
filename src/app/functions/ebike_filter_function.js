import { data } from '../../assets/ebike_data'

export const filterEbikes = (category, spec, setStateFunc) => {
  // eslint-disable-next-line array-callback-return
  if (category === 'price') {
    filterEbikesByPrice(spec, setStateFunc)
  } else {
    const result = []
    data.ebikes.forEach((ebike) => {
      if (ebike[category].toString() === spec) {
        result.push(ebike)
      }
    }
    )
    setStateFunc(result)
  }
}

// '0 - $999', '$1000 - $1999', '$2000 and up'

const filterEbikesByPrice = (spec, setStateFunction) => {
  const result = []
  switch (spec) {
    case '0 - $999':
      data.ebikes.forEach((ebike) => {
        if (ebike.price < 999) {
          result.push(ebike)
        }
      }
      )
      setStateFunction(result)
      break
    case '$1000 - $1999':
      data.ebikes.forEach((ebike) => {
        if (ebike.price > 999 && ebike.price < 1999) {
          result.push(ebike)
        }
      }
      )
      setStateFunction(result)
      break
    case '$2000 and up':
      data.ebikes.forEach((ebike) => {
        if (Number(ebike.price) > 2000) {
          result.push(ebike)
        }
      }
      )
      setStateFunction(result)

      break
  }
  setStateFunction(result)
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
