import { Box, Button, Stack, createTheme } from "@mui/material";
// import SettingsIcon from '@mui/icons-material/Settings';
// import AddIcon from '@mui/icons-material/Add';
import styled from "@emotion/styled";
import { Sidebar } from "./components/Sidebar";
import { Rightbar } from "./components/Rightbar";
import { Feed } from "./components/Feed";
import { Navbar } from "./components/Navbar";
import { Addbutton } from "./components/Addbutton";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";

function App() {
  const [mode, setMode] = useState("dark");
  const darkTheme = createTheme({
    palette:{
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar/>
      <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
        <Sidebar setMode={setMode} mode={mode}/>
        <Feed/>
        <Rightbar/>
      </Stack>
      <Addbutton/>
    </Box>
    </ThemeProvider>
  );
}

export default App;
