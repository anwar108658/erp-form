import React, { useState, useMemo } from 'react';
import { 
  Box, Drawer, AppBar, Toolbar, List, Typography, Divider, 
  IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, CssBaseline,
  ThemeProvider, createTheme 
} from '@mui/material';
import { 
  Menu as MenuIcon, 
  Dashboard as DashboardIcon, 
  People as PeopleIcon, 
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  Brightness4 as DarkModeIcon, 
  Brightness7 as LightModeIcon 
} from '@mui/icons-material';

const drawerWidth = 240;

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const [mode, setMode] = useState('light');

  // 1. Define your custom theme colors and shapes
  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'light' ? '#1a237e' : '#90caf9', // Navy in light, Light Blue in dark
      },
      secondary: {
        main: '#ffab00', // Gold accent
      },
      background: {
        default: mode === 'light' ? '#f4f6f8' : '#121212',
      },
    },
    shape: {
      borderRadius: 8, // Rounded corners for buttons/cards
    },
    typography: {
      fontFamily: 'Inter, Roboto, Arial, sans-serif',
    },
  }), [mode]);

  const toggleDrawer = () => setOpen(!open);
  const toggleTheme = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'Users', icon: <PeopleIcon /> },
    { text: 'Settings', icon: <SettingsIcon /> },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        {/* Header */}
        <AppBar 
          position="fixed" 
          sx={{ 
            zIndex: (theme) => theme.zIndex.drawer + 1,
            bgcolor: 'primary.main', // Uses theme primary
            boxShadow: 'none',
            borderBottom: '1px solid',
            borderColor: 'divider'
          }}
        >
          <Toolbar>
            <IconButton color="inherit" edge="start" onClick={toggleDrawer} sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap sx={{ flexGrow: 1, fontWeight: 'bold' }}>
              ADMIN PANEL
            </Typography>

            <IconButton onClick={toggleTheme} color="inherit">
              {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Sidebar */}
        <Drawer
          variant="permanent"
          open={open}
          sx={{
            width: open ? drawerWidth : 70,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { 
              width: open ? drawerWidth : 70, 
              boxSizing: 'border-box',
              transition: 'width 0.2s ease-in-out',
              overflowX: 'hidden',
              bgcolor: 'background.paper'
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto', display: 'flex', flexDirection: 'column', height: '100%' }}>
            <List sx={{ px: 1 }}>
              {menuItems.map((item) => (
                <ListItem key={item.text} disablePadding sx={{ display: 'block', mb: 0.5 }}>
                  <ListItemButton 
                    sx={{ 
                      minHeight: 48, 
                      justifyContent: open ? 'initial' : 'center', 
                      px: 2.5,
                      borderRadius: 1,
                      '&:hover': { bgcolor: 'primary.light', color: 'white', '& .MuiListItemIcon-root': { color: 'white' } }
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', color: 'primary.main' }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} primaryTypographyProps={{ fontWeight: 500 }} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            
            <Box sx={{ mt: 'auto', p: 1 }}>
              <Divider />
              <ListItemButton sx={{ mt: 1, borderRadius: 1, justifyContent: open ? 'initial' : 'center' }}>
                <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', color: 'error.main' }}>
                  <LogoutIcon />
                </ListItemIcon>
                {open && <ListItemText primary="Logout" sx={{ color: 'error.main' }} />}
              </ListItemButton>
            </Box>
          </Box>
        </Drawer>

        {/* Main Content Area */}
        <Box component="main" sx={{ flexGrow: 1, p: 3, minHeight: '100vh', bgcolor: 'background.default' }}>
          <Toolbar />
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', color: 'text.primary' }}>
            Overview
          </Typography>
          <Box 
            sx={{ 
              p: 4, 
              bgcolor: 'background.paper', 
              borderRadius: 2, 
              boxShadow: 1,
              border: '1px solid',
              borderColor: 'divider',
              color: 'text.secondary'
            }}
          >
            Your dashboard content now follows the <strong>{mode}</strong> theme settings.
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
