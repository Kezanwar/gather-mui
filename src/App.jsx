import { Box, Drawer } from "@mui/material";
import TopBar from "./layout/top-bar";
import Router from "./routes";
import SideBar from "./layout/side-bar";
import Main from "./layout/main";

function App() {
  return (
    <>
      <Box sx={{ height: "100vh", display: "flex" }}>
        <SideBar />
        <Main>
          <TopBar />
          <Router />
        </Main>
      </Box>
    </>
  );
}

export default App;
