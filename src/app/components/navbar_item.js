import { useState } from 'react'
import { filterEbikes } from '../functions/ebike_filter_function'

function NavbarItem (props) {
  const { title, subNavItems, setEbikes, dataKey, setShowSingleEbikeView, icon } = props
  const [open, setOpen] = useState(false)

  const handleClick = (event) => {
    filterEbikes(dataKey, event.target.innerText, setEbikes)
    setShowSingleEbikeView(false)
  }
  return (
    <div
    className='SideNavbarItems'
    >
    {icon}
    <span
      onClick={() => {
        if (!open) { setOpen(true) } else { setOpen(false) }
      }}
    >
      {title}
    </span>
    {open
      ? subNavItems.map(item => {
        return <div>
        <span
        className='SideNavBarSubItems'
        key={item.id}
        onClick={(event) => handleClick(event)}
        >
          {item
        }</span>
        </div>
      })
      : null
  }
    </div>
  )
}

export default NavbarItem
