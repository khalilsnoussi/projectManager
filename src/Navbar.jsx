import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Add from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import AcUnitIcon from '@mui/icons-material/AcUnit'; // Example logo icon
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


const Navbar = ({handleClickOpen}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="static" sx={{ backgroundColor: '#36BA98' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <AcUnitIcon style={{ width: 40, height: 40, marginRight: 16 }} />
          {!isSmallScreen && (
            <Typography variant="h6" component="div" sx={{ marginRight: 2 }}>
              Company Name
            </Typography>
          )}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
          <TextField
            variant="outlined"
            placeholder="Search"
            size="small"
            sx={{
              backgroundColor: 'white',
              borderRadius: '20px',
              width: isSmallScreen ? '80%' : '400px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '20px',
                paddingRight: 0,
                '& fieldset': {
                  borderColor: 'transparent',
                },
                '&:hover fieldset': {
                  borderColor: 'transparent',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'transparent',
                },
              },
              '& .MuiInputAdornment-positionEnd': {
                marginRight: '8px',
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton size="large" aria-label="show new notifications" color="inherit" onClick={handleClickOpen}>
              <Add/>
          </IconButton>
          <IconButton size="large" aria-label="show new notifications" color="inherit">
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
