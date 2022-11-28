import { data } from '../../assets/ebike_data'

const ebikes = data.ebikes

// Filter through data to return array of wheel sizes options for NavbarItem component
export const allWheelSizesArray = () => {
  const result = []
  ebikes.forEach(ebike => {
    if (!result.includes(ebike.wheel_size_in)) {
      result.push(ebike.wheel_size_in)
    }
  })
  return result
}

// Filter through data to return array of Brand options for NavbarItem component
export const allBrandsArray = () => {
  const result = []
  ebikes.forEach(ebike => {
    if (!result.includes(ebike.brand)) {
      result.push(ebike.brand)
    }
  })
  return result
}

// Filter through data to return array of motor wattage options for NavbarItem component
export const allMotorWattageArray = () => {
  const result = []
  ebikes.forEach(ebike => {
    if (!result.includes(ebike.motor_wattage)) {
      result.push(ebike.motor_wattage)
    }
  })
  return result
}

// Filter through data to return array of top speed options for NavbarItem component
export const allStylesArray = () => {
  const result = []
  ebikes.forEach(ebike => {
    ebike.style.forEach(style => {
      if (!result.includes(style)) {
        result.push(style)
      }
    }
    )
  })
  return result
}

// Filter through data to return array of top speed options for NavbarItem component
export const allMotorLocationArray = () => {
  const result = []
  ebikes.forEach(ebike => {
    if (!result.includes(ebike.motor_location)) {
      result.push(ebike.motor_location)
    }
  })
  return result
}

// Filter through data to return array of class options for NavbarItem component
export const allClassArray = () => {
  const result = []
  ebikes.forEach(ebike => {
    if (!result.includes(ebike.class)) {
      result.push(ebike.class)
    }
  })
  return result
}
