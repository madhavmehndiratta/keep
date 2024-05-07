import { Box } from "@mui/material"

// components
import SwipeDrawer from "./SwipeDrawer"
import Notes from "./notes/Notes"


const Home = () => {
    return (
        <Box style={{display: 'flex', width: '100%'}}>
        <SwipeDrawer />
        <Notes />
        </Box>
    )
}

export default Home;