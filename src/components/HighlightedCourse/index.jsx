import { Box, Card, CardContent, CardMedia, Typography, useTheme } from '@mui/material'
import React from 'react'

function HighlightedCourse({ title, category, clickHandler, startDate }) {
    const theme = useTheme()
    return (
        <Card
            sx={{
                display: 'flex',
                mb: 2,
                cursor: 'pointer'
            }}
            onClick={clickHandler}>
            <CardMedia
                component="img"
                image="https://www.smartpassiveincome.com/wp-content/uploads/2020/04/How-to-Create-an-Online-Course.png"
                alt="course-card" sx={{
                    width: '30%',
                    height: '100%'
                }} />
            <CardContent>
                <Box sx={{
                    display: 'flex',
                    gap: 4
                }}>
                    <Typography sx={{
                        fontSize: theme.typography.caption
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
                    fontSize: theme.typography.h5
                }}>{title}</Typography>
            </CardContent>
        </Card>
    )
}

export default HighlightedCourse