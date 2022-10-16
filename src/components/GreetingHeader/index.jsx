import { alpha, InputBase, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import CustomAvatar from '../CustomAvatar';
import FlexContainer from '../FlexContainer';
import { Search as SearchIcon } from '@mui/icons-material';
import { useSelector } from 'react-redux';

export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.blue, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

function GreetingHeader() {

    const loggedUserName = useSelector(state => state.login.name)
    const lastLoggedIn = useSelector(state => state.login.lastLoggedIn)

    return (
        <FlexContainer>
            <FlexContainer sx={{
                gap: 2
            }}>
                <CustomAvatar name={loggedUserName ? loggedUserName : "Something Went Wrong"} />
                <Stack>
                    <Typography variant="h6">{loggedUserName ? loggedUserName : ""}</Typography>
                    <Typography variant='p'>Last Login <span>{lastLoggedIn ? lastLoggedIn : "9th October, 2022. 08:35 PM"}</span></Typography>
                </Stack>
            </FlexContainer>
            {/* <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search> */}
        </FlexContainer>
    )
}

export default GreetingHeader