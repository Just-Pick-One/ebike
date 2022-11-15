import { data } from '../../assets/ebike_data'

const ebikes = data.ebikes

// Filter through data to return array of options for NavbarItem component
export const allWheelSizesArray = () => {
  const result = []
  ebikes.forEach(ebike => {
    if (!result.includes(ebike.wheel_size_in)) {
      result.push(ebike.wheel_size_in)
    }
  })
  return result
}

// Filter through data to return array of options for NavbarItem component
export const allBrandsArray = () => {
  const result = []
  ebikes.forEach(ebike => {
    if (!result.includes(ebike.brand)) {
      result.push(ebike.brand)
    }
  })
  return result
}

// Filter through data to return array of options for NavbarItem component
export const allMotorWattageArray = () => {
  const result = []
  ebikes.forEach(ebike => {
    if (!result.includes(ebike.motor_wattage)) {
      result.push(ebike.motor_wattage)
    }
  })
  return result
}

// Filter through data to return array of options for NavbarItem component
export const allTopSpeedsArray = () => {
  const result = []
  ebikes.forEach(ebike => {
    if (!result.includes(ebike.top_speed_mph)) {
      result.push(ebike.top_speed_mph)
    }
  })
  return result
}
