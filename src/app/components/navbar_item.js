import { useState } from 'react'
// import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { filterEbikes } from '../functions/ebike_filter_function'

function NavbarItem (props) {
  const { title, subNavItems, setEbikes, dataKey, setShowSingleEbikeView } = props
  const [open, setOpen] = useState(false)

  const handleClick = (event) => {
    filterEbikes(dataKey, event.target.innerText, setEbikes)
    setShowSingleEbikeView(false)
  }
  return (
    <Box
    className='SideNavbarItems'

    >
    <h3
      style={{ color: 'white' }}
      onClick={() => {
        if (!open) { setOpen(true) } else { setOpen(false) }
      }}
    >{title}
    </h3>
    {open
      ? subNavItems.map(item => {
        return <h4
        className='SideNavBarSubItems'
        key={item.id}
        onClick={(event) => handleClick(event)}
        >
          {item
        }</h4>
      })
      : null
  }
    </Box>
  )
}

export default NavbarItem
