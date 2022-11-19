import React from 'react'
import { cleanSingleEbikeData } from '../functions/ebike_filter_function'

function SingleEbikeDataTable (props) {
  const { singleEbike } = props

  const showTable = (ebike) => {
    console.log('EBIKE', ebike)
    const categories = Object.keys(ebike)
    const vals = Object.values(ebike)
    const tableRows = []
    for (let i = 0; i < categories.length; i++) {
      // if (categories[i] !== 'image_url' && categories[i] !== 'style') {
      tableRows.push(
              <tr key={categories[i]}>
                  <td style={{ border: '1px solid black ' }}>
                      {categories[i]}
                  </td>
                  <td style={{ border: '1px solid black ' }}>
                      {vals[i]}
                  </td>
              </tr>
      )
      // }
    }
    return tableRows
  }

  return (
    <div className='SingleEbikeTable'>
      <table style={{ border: '1px solid black ' }}>
        <tbody>
          <th style={{ border: '1px solid black ' }}>column1</th>
          <th style={{ border: '1px solid black ' }}>column2</th>
        </tbody>
        <tbody>{showTable(cleanSingleEbikeData(singleEbike))}</tbody>
      </table>
    </div>
  )
}

export default SingleEbikeDataTable
