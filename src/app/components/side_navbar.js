import { Box } from '@mui/material'
import React from 'react'
import '../../App.css'
import { allBrandsArray, allMotorLocationArray, allMotorWattageArray, allTopSpeedsArray, allWheelSizesArray } from '../functions/sidebar_functions'
import NavbarItem from './navbar_item'

function SideNavbar () {
  const wheelSizes = allWheelSizesArray()
  const brands = allBrandsArray()
  const motorWattages = allMotorWattageArray()
  const topSpeeds = allTopSpeedsArray()
  const motorType = allMotorLocationArray()

  return (
    <Box
    className='SideNavbar'>
      <NavbarItem
        title= {'Wheel Sizes'}
        subNavItems={wheelSizes}
        key={'wheel_size_in'}
      />
      <NavbarItem
        title= {'Brand'}
        subNavItems={brands}
        dataKey={'brand'}
      />
      <NavbarItem
      title= {'Motor Wattage'}
      subNavItems={motorWattages}
      dataKey={'motor_wattage'}
      />
      <NavbarItem
      title= {'Top Speed'}
      subNavItems={topSpeeds}
      dataKey={'top_speed_mph'}
      />
      <NavbarItem
      title= {'Motor Type'}
      subNavItems={motorType}
      key={'motor_location'}
      />
    </Box>
  )
}

export default SideNavbar
