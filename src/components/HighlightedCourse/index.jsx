import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'

function HighlightedCourse({ title, category, clickHandler, startDate }) {
    const theme = useTheme()
    return (
        <Box
            sx={{
                display: 'flex',
                mb: 2,
                cursor: 'pointer',
                width: '100%',
                overflow: 'hidden',
                borderRadius: '1rem',
                backgroundColor: theme.palette.grey[800],
                minHeight: '10rem'
            }}
            onClick={clickHandler}>
            <img
                src="https://www.smartpassiveincome.com/wp-content/uploads/2020/04/How-to-Create-an-Online-Course.png"
                alt="course-card" style={{
                    width: '30%',
                    height: 'auto',
                    objectFit: 'cover'
                }} />
            <Box className='content' sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                p: 2,
                flex: 1
            }}>
                <Box sx={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Typography sx={{
                        fontSize: theme.typography.caption,
                        padding: '.2rem .7rem',
                        borderRadius: '1rem',
                        borderWidth: '1px',
                        borderColor: theme.palette.primary
                    }}>{category}</Typography>
                    <Box sx={{
                        w: 1,
                        h: 1,
                        backgroundColor: theme.palette.grey[100]
                    }} />
                    <Typography sx={{
                        fontSize: theme.typography.caption
                    }}>{startDate}</Typography>
                </Box>

                <Typography sx={{
                    fontSize: theme.typography.h5,
                    mt: 2
                }}>{title}</Typography>
            </Box>
        </Box>
    )
}

export default HighlightedCourse