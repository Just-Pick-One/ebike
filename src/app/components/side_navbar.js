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
      />
      <NavbarItem
        title= {'Brand'}
        subNavItems={brands}
      />
      <NavbarItem
      title= {'Motor Wattage'}
      subNavItems={motorWattages}
      />
      <NavbarItem
      title= {'Top Speed'}
      subNavItems={topSpeeds}
      />
      <NavbarItem
      title= {'Motor Type'}
      subNavItems={motorType}
      />
    </Box>
  )
}

export default SideNavbar
