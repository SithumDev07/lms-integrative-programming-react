import { Card, CardContent, CardMedia, Typography, useTheme } from '@mui/material'
import React from 'react'

function HighlightedCourse({ title, category }) {
    const theme = useTheme()
    return (
        <Card
            sx={{
                display: 'flex',
                mb: 2
            }}>
            <CardMedia
                component="img"
                image="https://www.smartpassiveincome.com/wp-content/uploads/2020/04/How-to-Create-an-Online-Course.png"
                alt="course-card" sx={{
                    width: '30%',
                    height: '100%'
                }} />
            <CardContent>
                <Typography sx={{
                    fontSize: theme.typography.caption
                }}>{category}</Typography>
                <Typography sx={{
                    fontSize: theme.typography.h5
                }}>{title}</Typography>
            </CardContent>
        </Card>
    )
}

export default HighlightedCourse