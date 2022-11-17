import React from 'react'
import MultiEbikeView from './multi_ebike_view'
import SingleBike from './single_bike'

function Body (props) {
  const { ebikeState } = props

  return (
    <div className='Body' >
      <SingleBike />
      <MultiEbikeView
        ebikeState={ebikeState}
      />
    </div>

  )
}

export default Body
