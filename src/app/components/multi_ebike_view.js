// import { Grid } from '@mui/material'
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material'
import React from 'react'
import EbikeThumbnail from './ebike_thumbnail'

function MultiEbikeView (props) {
  const { ebikeState, setSingleEbike, setShowSingleEbikeView, multiBikeHeader } = props

  const showSingleEbike = (ebike) => {
    setSingleEbike(ebike)
    setShowSingleEbikeView(true)
  }

  return (
    <div>
      <div className='MultiHeader'>
      {multiBikeHeader}
      </div>
    <div className='MultiEbikeView'>
      <EbikeThumbnail />
        <ImageList sx={{ width: '60%', height: '60%' }}>
        <ImageListItem key="Subheader" cols={2}>
        </ImageListItem>
        {ebikeState.map((ebike) => (
          <ImageListItem key={ebike.image_url[0]}>
            <img
              src={`${ebike.image_url[0]}?w=248&fit=crop&auto=format`}
              srcSet={`${ebike.image_url[0]}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={ebike.brand}
              loading="lazy"
              onClick={() => showSingleEbike(ebike)}
            />
            <ImageListItemBar
              title={ebike.brand}
              subtitle={ebike.model}
            />
          </ImageListItem>
        ))}
    </ImageList>
    </div>
    </div>
  )
}

export default MultiEbikeView
