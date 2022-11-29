/* eslint-disable */
import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
// import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { applyDictionaryToEbike, cleanSingleEbikeData } from '../functions/ebike_filter_function'

function SingleEbikeDataTable (props) {
  const { singleEbike } = props

  const cleanedEbikeData = cleanSingleEbikeData(singleEbike)
  const categories = applyDictionaryToEbike(Object.keys(cleanedEbikeData))
  const vals = Object.values(cleanedEbikeData)

  function createData(key, value) {
    return { key, value };
  }

  const rows = []

  const fillRows = () => {
    for (let i = 0; i < categories.length; i++) {
      const currentKey = categories[i];
      const currentValue = vals[i];
      rows.push(createData(currentKey, currentValue))
    }
  }
  fillRows()

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 'auto' }} aria-label="simple table">
        {/* <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead> */}
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.key}
              </TableCell>
              {/* <TableCell align="right">{row.key}</TableCell> */}
              <TableCell align="left">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

// function SingleEbikeDataTable (props) {
//   const { singleEbike } = props

//   const showTable = (ebike) => {
//     const categories = applyDictionaryToEbike(Object.keys(ebike))
//     const vals = Object.values(ebike)
//     const tableRows = []
//     for (let i = 0; i < vals.length; i++) {
//       tableRows.push(
//               <tr key={vals[i]}>
//                   <td style={{ border: '1px solid black ' }}>
//                       {categories[i]}
//                   </td>
//                   <td style={{ border: '1px solid black ' }}>
//                       {vals[i]}
//                   </td>
//               </tr>
//       )
//     }
//     return tableRows
//   }

//   return (
//     <div className='SingleEbikeTable'>
//       <table style={{ border: '1px solid black ' }}>
//         <tbody>{showTable(cleanSingleEbikeData(singleEbike))}</tbody>
//       </table>
//     </div>
//   )
// }

export default SingleEbikeDataTable
