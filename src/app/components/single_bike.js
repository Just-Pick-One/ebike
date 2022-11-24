import React from 'react'
import SingleEbikeDataTable from './single_ebike_data_table'

function SingleBike (props) {
  const { singleEbike } = props

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
