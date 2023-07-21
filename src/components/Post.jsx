import React from 'react'
import { ChatBubbleOutline, Comment, Favorite, FavoriteBorder, Message, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Collapse, IconButton, Typography } from '@mui/material'

export const Post = (props) => {
  return (
    <div>
        <Card sx={{margin:5}}>
      <CardHeader
        avatar={
          <Avatar src = {props.dp} aria-label="recipe">
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={props.title}
        subheader={props.date}
      />
      <CardMedia  
        component="img"
        height="20%"
        image={props.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <Checkbox icon={<FavoriteBorder sx={{ fontSize: 27}} />} checkedIcon={<Favorite sx={{ fontSize: 27}}/>} />
        </IconButton>
        <IconButton aria-label="comment">
          <ChatBubbleOutline />
        </IconButton >
        
        <IconButton aria-label="share">
          <Share />
        </IconButton >
        
      </CardActions>
    </Card>
    </div>
  )
}
