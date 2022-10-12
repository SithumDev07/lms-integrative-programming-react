import { IconButton, styled, Toolbar, Typography, useTheme, AppBar as MuiAppBar } from '@mui/material'
import React from 'react'
import { Menu as MenuIcon } from '@mui/icons-material'

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

function CustomAppBar({ open, setOpen }) {
    const theme = useTheme()

    return (
        <AppBar position="fixed" open={open} sx={{
            backgroundColor: theme.palette.primary
        }}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => setOpen(!open)}
                    edge="start"
                    sx={{
                        marginRight: 5,
                        ...(open && { display: 'none' }),
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Momo
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default CustomAppBar