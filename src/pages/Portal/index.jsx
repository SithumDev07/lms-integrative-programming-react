import { Box, Typography } from '@mui/material'
import React from 'react'
import { PortalCard } from '../../components'

function Portal() {
    return (
        <Box sx={{
            height: '100vh',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 5,
            position: 'relative'
        }}>
            <Typography sx={{
                position: 'absolute',
                top: '5%',
            }}>Learning Management System</Typography>
            <PortalCard title="I am a Student" path={"/register?role=ROLE_STUDENT"} />
            <PortalCard title="I am a Teacher" path={"/register?role=ROLE_TEACHER"} />
            <PortalCard title="I am a Admin" path={"/register?role=ROLE_ADMIN"} />
        </Box>
    )
}

export default Portal