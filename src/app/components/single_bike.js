import React from 'react'
import SingleEbikeDataTable from './single_ebike_data_table'
// import Table from '@mui/material/Table'
// import TableBody from '@mui/material/TableBody'
// import TableCell from '@mui/material/TableCell'
// import TableContainer from '@mui/material/TableContainer'
// import TableHead from '@mui/material/TableHead'
// import TableRow from '@mui/material/TableRow'
// import Paper from '@mui/material/Paper'

function SingleBike (props) {
  const { singleEbike } = props

  // const createData = (category, val) => {
  //   return { category, val }
  // }

  // const makeRows = (ebike) => {
  //   const result = []
  //   for (const [key, value] of Object.entries(ebike)) {
  //     result.push(createData(`${key}`, `${value}`))
  //   }
  //   return result
  // }
  // const rows = [
  //   makeRows(singleEbike)
  // ]

  return (
    <div className='SingleEbikeView'>
      <h1 className='SingleEbikeTitle'>{singleEbike.brand}</h1>
      <h2
      className='SingleEbikeSubTitle'>{singleEbike.model}</h2>
      {
        singleEbike.image_url.map(image => (
          <img
          className='SingleEbikeImage'
          src={image}
          style={{ border: '3px solid black ' }}
          ></img>
        ))
      }

      <SingleEbikeDataTable
        singleEbike={singleEbike}
      />
    </div>
  )
}

export default SingleBike
