import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material'
import React from 'react'
// import { theme } from '../theme'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

export const Rightbar = () => {
  return (
    <Box flex={2} width={300} sx={{display: {xs: "none", sm:"block"}}}>
      <Box position="fixed">
        <Typography variant='h6' fontWeight={400} fontSize={18} sx={{opacity: "0.5", marginTop: 2, marginBottom: 1}}>Online</Typography>
        <AvatarGroup max={8} sx={{marginRight: 5}}>
          <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
          <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" />
          <Avatar alt="Cindy Baker" src="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg" />
          <Avatar alt="Agnes Walker" src="https://helostatus.com/wp-content/uploads/2021/09/2021-profile-WhatsApp-hd.jpg" />
          <Avatar alt="Trevor Henderson" src="https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg" />
          <Avatar alt="Trevor Henderson" src="" />
          <Avatar alt="Trevor Henderson" src="https://e1.pxfuel.com/desktop-wallpaper/903/679/desktop-wallpaper-97-aesthetic-best-profile-pic-for-instagram-for-boy-instagram-dp-boys.jpg" />
          <Avatar alt="Trevor Henderson" src="https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg" />
          <Avatar alt="Trevor Henderson" src="https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg" />
      </AvatarGroup>
      <Typography variant='h6' fontWeight={400} fontSize={18} sx={{opacity: "0.5", marginTop: 2, marginBottom: 1}}>My Photos</Typography>
      <ImageList cols={3} rowHeight={100} gap={5}>
        <ImageListItem>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/022/575/456/small/chamomile-flower-field-camomile-in-the-nature-field-of-camomiles-at-sunny-day-at-nature-camomile-daisy-flowers-in-summer-day-chamomile-flowers-field-wide-background-in-sun-light-generative-ai-photo.jpg" alt="nature" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://t3.ftcdn.net/jpg/05/28/81/16/360_F_528811621_o9GqVieGvZoLZVOVrE78guOPWpS09QnM.jpg" alt="nature" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://thumbs.dreamstime.com/b/abstract-soft-sweet-pink-flower-background-daisy-flowers-56547364.jpg" alt="nature" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://images.unsplash.com/photo-1487164697898-db7bfc2b7bf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdpcmwlMjBsYXVnaGluZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="nature" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://images.pexels.com/photos/355748/pexels-photo-355748.jpeg?cs=srgb&dl=pexels-pixabay-355748.jpg&fm=jpg" alt="nature" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://media.istockphoto.com/id/1172643701/photo/oops-little-girl-laughing.jpg?s=612x612&w=0&k=20&c=HeDjvrH-rbJOMGuJW20QixtmGe9xZc4nTf-V411WjBo=" alt="nature" />
        </ImageListItem>
      </ImageList>
      <Typography variant='h6' fontWeight={400} fontSize={18} sx={{opacity: "0.5", marginTop: 2}}>Conversations</Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  )
}
