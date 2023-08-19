import { Box, Typography } from '@mui/material'
import { RotatingLines } from 'react-loader-spinner'
import * as Constants from '../../constants'

interface SpinnerProps {
    width?: string
    duration?: string
    color?: string
}

const Spinner = ({ width = '20', duration = '1', color = Constants.DEFAULT_COLOR_TEXT_LOW_EMPHASIS }: SpinnerProps) => {

    return (
        <Box
            display="flex"
        >
            <RotatingLines width={width} strokeColor={color} animationDuration={duration} strokeWidth='4' />
            <Typography variant="h2_low_emphasis" sx={{
                marginLeft: '8px'
            }} >Loading</Typography>
        </Box>
    )
}

export default Spinner