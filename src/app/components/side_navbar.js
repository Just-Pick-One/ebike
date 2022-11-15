import React from 'react'
import '../../App.css'
import { allBrandsArray, allMotorWattageArray, allTopSpeedsArray, allWheelSizesArray } from '../functions/sidebar_functions'
import NavbarItem from './navbar_item'

function SideNavbar () {
  const wheelSizes = allWheelSizesArray()
  const brands = allBrandsArray()
  const motorWattages = allMotorWattageArray()
  const topSpeeds = allTopSpeedsArray()

  return (
    <div className='SideNavbar'>
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
      title= {'Wheel Sizes'}
      subNavItems={wheelSizes}
      />
    </div>
  )
}

export default SideNavbar
