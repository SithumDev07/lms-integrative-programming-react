import { Link, Typography, useTheme } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { } from '../../themes/palette'

function PortalCard({ path }) {

    const theme = useTheme()

    return (
        <Link component={RouterLink} to={path} sx={{
            p: 3,
            borderRadius: '2rem',
            width: '20vw',
            height: 'auto',
            backgroundColor: theme.palette.grey[400]
        }}>
            <Typography>
                I am a Student
            </Typography>
        </Link>
    )
}

export default PortalCard