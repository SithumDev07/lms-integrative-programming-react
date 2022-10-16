import { Link, Typography, useTheme } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { } from '../../themes/palette'

function PortalCard({ path, title }) {

    const theme = useTheme()

    return (
        <Link component={RouterLink} to={path} sx={{
            p: 3,
            borderRadius: '2rem',
            width: '20vw',
            minHeight: '40vh',
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            "&:hover": {
                transform: {
                    scale: '110%'
                }
            }
        }}>
            <Typography sx={{
                color: theme.palette.common.white,
                fontSize: theme.typography.h5
            }}>
                {title}
            </Typography>
        </Link>
    )
}

export default PortalCard