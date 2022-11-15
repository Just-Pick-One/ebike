import React from 'react'

function NavbarItem (props) {
  const { title, subNavItems } = props

  // const subMenu = allWheelSizesArray()
  // console.log(subMenu)
  return (
    <>
    <div>{title}</div>
    {subNavItems.map(item => {
      return <div>{item}</div>
    })}

    </>
  )
}

export default NavbarItem
