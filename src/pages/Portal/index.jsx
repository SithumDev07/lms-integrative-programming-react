import { Box } from '@mui/material'
import React from 'react'
import { PortalCard } from '../../components'

function Portal() {
    return (
        <Box sx={{
            height: '100vh',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <PortalCard path={"/"} />
        </Box>
    )
}

export default Portal