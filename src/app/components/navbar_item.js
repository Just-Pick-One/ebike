import { useState } from 'react'
import { Link } from '@mui/material'
import { Box } from '@mui/system'

function NavbarItem (props) {
  const { title, subNavItems } = props

  const [open, setOpen] = useState(false)
  return (
    <Box
    className='SideNavbarItems'>
    <Link
      component="button"
      variant="body2"
      onClick={() => {
        if (!open) { setOpen(true) } else { setOpen(false) }
      }}
    >{title}
    </Link>
    {open
      ? subNavItems.map(item => {
        return <div>{item}</div>
      })
      : null
  }

    </Box>
  )
}

export default NavbarItem
