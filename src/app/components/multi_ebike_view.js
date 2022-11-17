// import { Grid } from '@mui/material'
import { ImageList, ImageListItem, ImageListItemBar, ListSubheader } from '@mui/material'
import React from 'react'
import EbikeThumbnail from './ebike_thumbnail'

function MultiEbikeView (props) {
  const { ebikeState } = props

  return (
    <div>
      <EbikeThumbnail />
<ImageList sx={{ width: '100%', height: '100%' }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Ebikes</ListSubheader>
      </ImageListItem>
      {ebikeState.map((ebike) => (
        <ImageListItem key={ebike.image_url}>
          <img
            src={`${ebike.image_url}?w=248&fit=crop&auto=format`}
            srcSet={`${ebike.image_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={ebike.brand}
            loading="lazy"
          />
          <ImageListItemBar
            title={ebike.brand}
            subtitle={ebike.model}
          />
        </ImageListItem>
      ))}
    </ImageList>

    </div>
  )
}

export default MultiEbikeView
