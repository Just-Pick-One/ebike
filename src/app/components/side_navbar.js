
import React from 'react'
import '../../App.css'
import { data } from '../../assets/ebike_data'
import { allBrandsArray, allMotorLocationArray, allMotorWattageArray, allTopSpeedsArray, allWheelSizesArray } from '../functions/sidebar_functions'
import NavbarItem from './navbar_item'

function SideNavbar (props) {
  const { setEbikes, setShowSingleEbikeView } = props

  const prices = ['0 - $999', '$1000 - $1999', '$2000 and up']
  const wheelSizes = allWheelSizesArray()
  const brands = allBrandsArray()
  const motorWattages = allMotorWattageArray()
  const topSpeeds = allTopSpeedsArray()
  const motorType = allMotorLocationArray()

  const handleClickAllBikes = () => {
    setEbikes(data.ebikes)
    setShowSingleEbikeView(false)
  }

  return (
    <div
    className='SideNavbar'>
      <h3
      className='SideNavbarItems'
      onClick={() => handleClickAllBikes()}
      >
        All Bikes
      </h3>
      <NavbarItem
        title= {'Price'}
        subNavItems={prices}
        setEbikes={setEbikes}
        dataKey={'price'}
        setShowSingleEbikeView={setShowSingleEbikeView}
      />
      <NavbarItem
        title= {'Wheel Sizes'}
        subNavItems={wheelSizes}
        setEbikes={setEbikes}
        dataKey={'wheel_size_in'}
        setShowSingleEbikeView={setShowSingleEbikeView}
      />
      <NavbarItem
        title= {'Brand'}
        subNavItems={brands}
        setEbikes={setEbikes}
        dataKey={'brand'}
        setShowSingleEbikeView={setShowSingleEbikeView}
      />
      <NavbarItem
        title= {'Motor Wattage'}
        subNavItems={motorWattages}
        setEbikes={setEbikes}
        dataKey={'motor_wattage'}
        setShowSingleEbikeView={setShowSingleEbikeView}
      />
      <NavbarItem
        title= {'Top Speed'}
        subNavItems={topSpeeds}
        setEbikes={setEbikes}
        dataKey={'top_speed_mph'}
        setShowSingleEbikeView={setShowSingleEbikeView}
      />
      <NavbarItem
        title= {'Motor Type'}
        subNavItems={motorType}
        setEbikes={setEbikes}
        dataKey={'motor_location'}
        setShowSingleEbikeView={setShowSingleEbikeView}
      />
    </div>
  )
}

export default SideNavbar
