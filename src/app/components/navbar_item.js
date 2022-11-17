import { useState } from 'react'
// import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { filterEbikes } from '../functions/ebike_filter_function'

function NavbarItem (props) {
  const { title, subNavItems, setEbikes, dataKey } = props
  const [open, setOpen] = useState(false)

  return (
    <Box
    className='SideNavbarItems'>
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
        onClick={(event) => filterEbikes(dataKey, event.target.innerText, setEbikes)}
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
