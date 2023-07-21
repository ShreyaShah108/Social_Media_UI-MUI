import styled from '@emotion/styled'
import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { theme } from '../theme';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

const StyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(( {theme} ) => ({
  // color: theme.palette.textColor.main,
  backgroundColor: "white",
  padding: "0px 10px",
  borderRadius: "10px",
  width: "40%",
}));
const Icons = styled("Box")(( {theme} ) => ({
  display: "none",
  gap: "15px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "flex"
  }
}));
export const User = styled("Box")(( {theme} ) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "none"
  }
}));

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky">
      <StyleToolbar>
        <Typography variant='h6' sx={{display:{xs:"none",sm:"block"}}}>Socials</Typography>
        <PeopleAltIcon sx={{display:{xs:"block",sm:"none"}}}/>
        <Search><InputBase placeholder='Search'></InputBase></Search>
        <Icons>
          <Badge badgeContent={4} color = "error"><MailIcon/></Badge>
          <Badge badgeContent={4} color = "error"><NotificationsIcon/></Badge>
          <Avatar sx={{width:"27px", height:"27px", margin:"0px 6px"}} src='https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg?cs=srgb&dl=pexels-min-an-675920.jpg&fm=jpg'
          onClick={(e)=>setOpen(true)}
          />
        </Icons>
        <User onClick={(e)=>setOpen(true)}>
        <Avatar sx={{width:"27px", height:"27px", margin:"0px 6px"}} src='https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg?cs=srgb&dl=pexels-min-an-675920.jpg&fm=jpg'/>
        <Typography variant='span'>Emily09</Typography>
        </User>
      </StyleToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false) }
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>

    </AppBar>
  )
}
