import { Box } from '@mui/material'
import React from 'react'
import { Post } from './Post'

export const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Post 
      dp = 'https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg?cs=srgb&dl=pexels-min-an-675920.jpg&fm=jpg'
      title = "Emily Watkins" 
      date="June 15, 2023"
      image="https://c4.wallpaperflare.com/wallpaper/946/646/440/glacier-bay-during-daytime-wallpaper-preview.jpg"
      text="Green Tree Photography Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt repellat architecto laboriosam culpa facere blanditiis tenetur, beatae expedita quisquam iure!"/> 

      <Post title = "Jules Waters" 
      date="June 14, 2023"
      image="https://xoxobella.com/wp-content/uploads/2020/08/instagram_captions_for_nature_photos-2.jpg"
      text="One with Nature! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt repellat architecto laboriosam culpa facere blanditiis tenetur, beatae expedita quisquam iure!"/>

      <Post title = "Jules Waters" 
      date="June 04, 2023"
      image="https://realfood.tesco.com/media/images/Paella1400x919--921069c0-e3c1-46c2-a7fb-da21bf7bcd44-0-1400x919.jpg"
      text="This impressive paella is a perfect party dish and a fun meal to cook
      together with your guests. Add 1 cup of frozen peas along with the mussels,
      if you like."/>
      
    </Box>
  )
}
