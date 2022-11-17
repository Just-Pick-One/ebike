import { Box } from '@mui/material'
import React from 'react'
import '../../App.css'
import { data } from '../../assets/ebike_data'
import { allBrandsArray, allMotorLocationArray, allMotorWattageArray, allTopSpeedsArray, allWheelSizesArray } from '../functions/sidebar_functions'
import NavbarItem from './navbar_item'

function SideNavbar (props) {
  const { setEbikes } = props

  const wheelSizes = allWheelSizesArray()
  const brands = allBrandsArray()
  const motorWattages = allMotorWattageArray()
  const topSpeeds = allTopSpeedsArray()
  const motorType = allMotorLocationArray()

  return (
    <Box
    className='SideNavbar'>
      <NavbarItem
        title= {'All Ebikes'}
        subNavItems={data.ebikes}
      />
      <NavbarItem
        title= {'Wheel Sizes'}
        subNavItems={wheelSizes}
        setEbikes={setEbikes}
        dataKey={'wheel_size_in'}
      />
      <NavbarItem
        title= {'Brand'}
        subNavItems={brands}
        setEbikes={setEbikes}
        dataKey={'brand'}
      />
      <NavbarItem
        title= {'Motor Wattage'}
        subNavItems={motorWattages}
        setEbikes={setEbikes}
        dataKey={'motor_wattage'}
      />
      <NavbarItem
        title= {'Top Speed'}
        subNavItems={topSpeeds}
        setEbikes={setEbikes}
        dataKey={'top_speed_mph'}
      />
      <NavbarItem
        title= {'Motor Type'}
        subNavItems={motorType}
        setEbikes={setEbikes}
        dataKey={'motor_location'}
      />
    </Box>
  )
}

export default SideNavbar
