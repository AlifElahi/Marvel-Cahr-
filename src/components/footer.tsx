

import { AppBar, Box } from '@mui/material';
import Typography from '@mui/material/Typography';




export default function Footer() {
    return (
        // <div
        //     style={{ display: "flex", height: "30px", justifyContent: "center",width:"100%", alignItems: "centr", color: "white", backgroundColor: "#61dafb" ,position:'fixed',bottom:0}}>
        //     <Typography variant="body1">AppGame test</Typography>
        // </div>
        <Box sx={{ flexGrow: 1, position: 'fixed', bottom: 0, width: '100%' }}>
            <AppBar position="static" style={{ display: "flex", justifyContent: "center" }} >
                
                <Typography variant="h6" color="inherit" component="div">
                    App Game
                </Typography>
           
            </AppBar>
        </Box>
    );
}
