import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

function SingleBike (props) {
  const { singleEbike } = props

  const createData = (category, val) => {
    return { category, val }
  }

  const makeRows = (ebike) => {
    const result = []
    for (const [key, value] of Object.entries(ebike)) {
      result.push(createData(`${key}`, `${value}`))
    }
    return result
  }
  const rows = [
    makeRows(singleEbike)
  ]

  return (
    <div>
      <img className='SingleEbikeImage' src={singleEbike.image_url} ></img>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{singleEbike.brand}</TableCell>
            <TableCell align="right">Price (usd)</TableCell>
            <TableCell align="right">Weight&nbsp;(lbs)</TableCell>
            <TableCell align="right">Top Speed&nbsp;(mph)</TableCell>
            <TableCell align="right">Wheel Size&nbsp;(In)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={singleEbike.model}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {singleEbike.model}
              </TableCell>
              <TableCell align="right">{singleEbike.price}</TableCell>
              <TableCell align="right">{singleEbike.weight}</TableCell>
              <TableCell align="right">{singleEbike.top_speed_mph}</TableCell>
              <TableCell align="right">{singleEbike.wheel_size_in}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default SingleBike
