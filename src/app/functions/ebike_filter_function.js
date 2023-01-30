import { data } from '../../assets/ebike_data'
const _ = require('lodash')

export const sortEbikes = (ebikes) => {
  return _.orderBy(ebikes, [ebike => ebike.brand.toLowerCase()], ['asc'])
}

export const filterEbikes = (category, spec, setEbikeStateFunc, setHeaderStateFunc) => {
  // eslint-disable-next-line array-callback-return
  if (category === 'price') {
    filterEbikesByPrice(spec, setEbikeStateFunc)
  } else if (category === 'style') {
    const result = []
    data.ebikes.forEach(ebike => {
      if ((ebike.style.includes(spec.toLowerCase()))) {
        result.push(ebike)
      }
    }
    )
    setEbikeStateFunc(sortEbikes(result))
  } else {
    const result = []
    data.ebikes.forEach((ebike) => {
      if (ebike[category].toString() === spec) {
        result.push(ebike)
      }
    }
    )
    setEbikeStateFunc(sortEbikes(result))
  }
  setHeaderStateFunc(`${ebikeKeyDictionary[category]}: ${spec[0] === '$' ? spec : _.startCase(spec)}`)
}

const filterEbikesByPrice = (spec, setStateFunction) => {
  const result = []
  switch (spec) {
    case '$0 - $999':
      data.ebikes.forEach((ebike) => {
        if (ebike.price < 999) {
          result.push(ebike)
        }
      }
      )
      setStateFunction(sortEbikes(result))
      break
    case '$1000 - $1999':
      data.ebikes.forEach((ebike) => {
        if (ebike.price > 999 && ebike.price < 1999) {
          result.push(ebike)
        }
      }
      )
      setStateFunction(sortEbikes(result))
      break
    case '$2000 and Up':
      data.ebikes.forEach((ebike) => {
        if (Number(ebike.price) > 2000) {
          result.push(ebike)
        }
      }
      )
      setStateFunction(sortEbikes(result))
      break
  }
  setStateFunction(sortEbikes(result))
}

export const cleanSingleEbikeData = (ebike) => {
  const cleanedEbike = { ...ebike }
  delete cleanedEbike.id
  delete cleanedEbike.archive
  delete cleanedEbike.image_url
  delete cleanedEbike.website
  cleanedEbike.colors = cleanedEbike.colors.join(', ')
  cleanedEbike.accessories = cleanedEbike.accessories.map(acc => _.startCase(acc)).join(', ')
  cleanedEbike.style = cleanedEbike.style.map(style => _.startCase(style)).join(', ')
  cleanedEbike.sizes = cleanedEbike.sizes.join(', ')

  if (cleanedEbike.torque_max_nm === -1) cleanedEbike.torque_max_nm = 'No Data'

  if (cleanedEbike.controller_a === -1) cleanedEbike.controller_a = 'No Data'

  if (cleanedEbike.top_speed_mph === -1) cleanedEbike.top_speed_mph = 'No Data'

  if (cleanedEbike.crank_set_teeth === -1) cleanedEbike.crank_set_teeth = 'No Data'

  if (cleanedEbike.battery_capacity_ah === -1) cleanedEbike.battery_capacity_ah = 'No Data'

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
  style: 'Style',
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
  sensor: 'Sensor',
  torque_max_nm: 'Torque (nm)',
  range: 'Range (miles)',
  brake_type: 'Brake Type',
  speeds: 'Speeds',
  image_url: 'Image URL',
  website: 'Website',
  throttle_control: 'Throttle Type',
  crank_set_teeth: 'Crankset Size'
}
