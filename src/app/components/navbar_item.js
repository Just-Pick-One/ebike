import { useState } from 'react'
// import { Typography } from '@mui/material'
import { Box } from '@mui/system'

function NavbarItem (props) {
  const { title, subNavItems } = props

  const [open, setOpen] = useState(false)
  return (
    <Box
    className='SideNavbarItems'>
    <h3
      style={{ color: 'white' }}
      // component="button"
      // underline="hover"
      // variant="body2"
      onClick={() => {
        if (!open) { setOpen(true) } else { setOpen(false) }
      }}
    >{title}
    </h3>
    {open
      ? subNavItems.map(item => {
        return <div key={item.id}>{item}</div>
      })
      : null
  }

    </Box>
  )
}

export default NavbarItem
