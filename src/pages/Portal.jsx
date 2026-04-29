import * as React from 'react';
import {
  Box,
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;

export default function Portal() {
  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* APP BAR */}
      <AppBar
        position="fixed"
        sx={{
          transition: '0.3s',
          ...(open && {
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }),
        }}
      >
        <Toolbar>
          {!open && (
            <IconButton color="inherit" onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6">Sales Portal</Typography>
        </Toolbar>
      </AppBar>

      {/* DRAWER */}
<Drawer
  variant="persistent"
  anchor="left"
  open={open}
  sx={{
    width: drawerWidth,
    flexShrink: 0,

    // 🔥 THIS IS THE FIX
    position: 'absolute',

    '& .MuiDrawer-paper': {
      width: drawerWidth,
      transition: '0.3s',
      transform: open
        ? 'translateX(0)'
        : `translateX(-${drawerWidth}px)`,
    },
  }}
>
        <Toolbar sx={{ justifyContent: 'flex-end' }}>
          <IconButton onClick={() => setOpen(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>

        <Divider />

        <List>
          {['Customer' ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* MAIN CONTENT */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          transition: '0.3s',
          ml:0,
          ml: open ? `${drawerWidth}px` : 0,
        }}
      >
        <Toolbar />
ddd
        <Typography>
          Your content here...
        </Typography>
      </Box>
    </Box>
  );
}