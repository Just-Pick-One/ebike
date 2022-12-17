
import React from 'react'
import '../../App.css'
import { MdPedalBike, MdMiscellaneousServices } from 'react-icons/md'
import { BsCurrencyDollar, BsSpeedometer2 } from 'react-icons/bs'
import { AiFillTag } from 'react-icons/ai'
import { GiElectric, GiCartwheel } from 'react-icons/gi'
import { TbEngine } from 'react-icons/tb'
import { data } from '../../assets/ebike_data'
import { allBrandsArray, allMotorLocationArray, allMotorWattageArray, allStylesArray, allWheelSizesArray, allClassArray } from '../functions/sidebar_functions'
import NavbarItem from './navbar_item'

function SideNavbar (props) {
  const { setEbikes, setShowSingleEbikeView, setMultiBikeHeader } = props

  const prices = ['$0 - $999', '$1000 - $1999', '$2000 and Up']
  const wheelSizes = allWheelSizesArray()
  const brands = allBrandsArray()
  const motorWattages = allMotorWattageArray()
  const styles = allStylesArray()
  const motorType = allMotorLocationArray()
  const classes = allClassArray()

  const handleClickAllBikes = () => {
    setEbikes(data.ebikes)
    setShowSingleEbikeView(false)
    setMultiBikeHeader('All E-Bikes')
  }

  return (
    <div
    className='SideNavbar'>
      <span
      className='SideNavbarItems'
      onClick={() => handleClickAllBikes()}
      >
        <MdPedalBike style={{ paddingRight: 15 }}/>
        All Bikes
      </span>
      <NavbarItem
        title= {'Price'}
        subNavItems={prices}
        setEbikes={setEbikes}
        dataKey={'price'}
        setShowSingleEbikeView={setShowSingleEbikeView}
        setMultiBikeHeader={setMultiBikeHeader}
        icon={<BsCurrencyDollar style={{ paddingRight: 15 }}/>}
      />
      <NavbarItem
        title= {'Brand'}
        subNavItems={brands}
        setEbikes={setEbikes}
        dataKey={'brand'}
        setShowSingleEbikeView={setShowSingleEbikeView}
        setMultiBikeHeader={setMultiBikeHeader}
        icon={<AiFillTag style={{ paddingRight: 15 }}/>}
      />
      <NavbarItem
        title= {'Motor Wattage'}
        subNavItems={motorWattages}
        setEbikes={setEbikes}
        dataKey={'motor_wattage'}
        setShowSingleEbikeView={setShowSingleEbikeView}
        setMultiBikeHeader={setMultiBikeHeader}
        icon={<GiElectric style={{ paddingRight: 15 }}/>}
      />
      <NavbarItem
        title= {'Motor Type'}
        subNavItems={motorType}
        setEbikes={setEbikes}
        dataKey={'motor_location'}
        setShowSingleEbikeView={setShowSingleEbikeView}
        setMultiBikeHeader={setMultiBikeHeader}
        icon={<TbEngine style={{ paddingRight: 15 }}/>}
      />
      <NavbarItem
        title= {'Style'}
        subNavItems={styles}
        setEbikes={setEbikes}
        dataKey={'style'}
        setShowSingleEbikeView={setShowSingleEbikeView}
        setMultiBikeHeader={setMultiBikeHeader}
        icon={<MdMiscellaneousServices style={{ paddingRight: 15 }}/>}
      />
      <NavbarItem
        title= {'Wheel Sizes'}
        subNavItems={wheelSizes}
        setEbikes={setEbikes}
        dataKey={'wheel_size_in'}
        setShowSingleEbikeView={setShowSingleEbikeView}
        setMultiBikeHeader={setMultiBikeHeader}
        icon={<GiCartwheel style={{ paddingRight: 15 }}/>}
      />
      <NavbarItem
        title= {'Class'}
        subNavItems={classes}
        setEbikes={setEbikes}
        dataKey={'class'}
        setShowSingleEbikeView={setShowSingleEbikeView}
        setMultiBikeHeader={setMultiBikeHeader}
        icon={<BsSpeedometer2 style={{ paddingRight: 15 }}/>}
      />
    </div>
  )
}

export default SideNavbar
