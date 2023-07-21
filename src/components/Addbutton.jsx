import { Add, EmojiEmotions, InsertPhoto, Videocam } from '@mui/icons-material'
import { Avatar, Box, Button, Fab, IconButton, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { theme } from '../theme'
import styled from '@emotion/styled';
import { yellow } from '@mui/material/colors';
// import { User } from './Navbar' 
export const User = styled("Box")(( {theme} ) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
  }));

export const Addbutton = () => {
    const [open, setOpen] = useState(false)
  return (
    <>
        <Tooltip onClick={e=>setOpen(true)}
         title="New Post" sx={{position: "fixed", bottom: 20, left:{xs: "calc(50% - 25px)", sm: 20}}}>
            <IconButton>
            <Fab color="primary" aria-label="add">
                <Add />
            </Fab>
            </IconButton>
        </Tooltip>
<Modal sx={{display: "flex", alignItems:"center", justifyContent: "center"}}
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={400} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5} margin="10px">
    <Typography variant='h6' color={theme.palette.primary.main} textAlign="center">Create New Post</Typography>
    <User>
    <Avatar sx={{width:30, height:30}} src='https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg?cs=srgb&dl=pexels-min-an-675920.jpg&fm=jpg'/>
        <Typography fontWeight={500} variant='span'>Emily09</Typography>
    </User>

    <Box
    textAlign="center"
      component="form"
    //   sx={{
    //     '& > :not(style)': { m: 1, width: '25ch' },
    //   }}
    >
    <div>
        <TextField
          label="Caption"
          id="outlined-size-small"
          defaultValue=" "
          size="small"
          sx={{marginTop: 3, width: 300}}
        />
      </div>
      <Stack margin="50px" direction="row" gap={1} mt={2} mb={3}>
        <EmojiEmotions color='primary'/>
        <InsertPhoto color='secondary'/>
        <Videocam color="yellow"/>
      </Stack>
      <Button variant="contained" width={5} sx={{marginLeft:"75%", marginTop:"40%"}}>Post</Button>
    </Box>
  </Box>
</Modal>
    </>
  )
}
