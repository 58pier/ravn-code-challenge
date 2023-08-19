import { Box, Typography } from '@mui/material'
import React from 'react'

const DataCell = ({

}) => {
    return (
        <Box
            height="49px"
            display="flex"
            flexDirection="row"
            alignItems='center'
            justifyContent='space-between'
            marginLeft="16px"
            borderBottom="1px solid rgba(0, 0, 0, 0.10);"
        >
            <Typography
                variant="h2"
            >
                Caracteristica
            </Typography>
            <Typography
                marginRight="16px"
            >
                Blue
            </Typography>
        </Box>
    )
}

export default DataCell