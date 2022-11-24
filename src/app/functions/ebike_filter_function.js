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
  cleanedEbike.sizes = cleanedEbike.sizes.join(', ')

  if (cleanedEbike.torque_max_nm === -1) cleanedEbike.torque_max_nm = 'No Data'

  if (cleanedEbike.controller_a === -1) cleanedEbike.controller_a = 'No Data'

  return cleanedEbike
}

export const applyDictionaryToEbike = (ebikeCategories) => {
  const translatedCategories = []
  ebikeCategories.forEach(category => {
    translatedCategories.push(ebikeKeyDictionary[category])
  })
  return translatedCategories
}

const ebikeKeyDictionary = {
  id: 'id',
  archive: 'Archived',
  brand: 'Brand',
  model: 'Model',
  class: 'Class',
  style: 'Style(s)',
  accessories: 'Accessories',
  price: 'Price',
  sizes: 'Sizes',
  weight: 'Weight (lbs)',
  weight_capacity_lbs: 'Weight Capacity (lbs)',
  top_speed_mph: 'Top Speed (mph)',
  wheel_size_in: 'Wheel Size (in)',
  tire_width_in: 'Tire Width (in)',
  colors: 'Colors',
  battery_capacity_ah: 'Battery Capacity (Ah)',
  battery_voltage: 'Battery Voltage',
  controller_a: 'Controller (amps)',
  motor_location: 'Motor Type',
  motor_wattage: 'Motor Wattage',
  motor_brand: 'Motor Brand',
  torque_max_nm: 'Torque (nm)',
  range: 'Range (miles)',
  brake_type: 'Brake Type',
  speeds: 'Speeds',
  image_url: 'Image URL',
  website: 'Website',
  throttle_control: 'Throttle Type',
  crank_set_teeth: 'Crankset Size'
}
