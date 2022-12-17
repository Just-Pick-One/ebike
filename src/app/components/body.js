import React from 'react'
import MultiEbikeView from './multi_ebike_view'
import SingleBike from './single_bike'

function Body (props) {
  const {
    ebikeState,
    setSingleEbike,
    singleEbike,
    showSingleEbikeView,
    setShowSingleEbikeView,
    multiBikeHeader
  } = props

  return (
    <div className='Body' >
     { showSingleEbikeView
       ? <SingleBike
          singleEbike={singleEbike}
        />

       : <MultiEbikeView
        ebikeState={ebikeState}
        setSingleEbike={setSingleEbike}
        setShowSingleEbikeView={setShowSingleEbikeView}
        multiBikeHeader={multiBikeHeader}
      />
      }
    </div>

  )
}

export default Body
