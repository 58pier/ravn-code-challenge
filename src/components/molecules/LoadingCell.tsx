import { Box, Typography } from "@mui/material"
import Spinner from "../atoms/Spinner"

const LoadingCell = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: '56px',
            }}
        >
            <Typography
                variant="h2_high_emphasis"
                sx={{
                    marginLeft: '16px',
                    marginRight: '16px',
                }}
            >
                <Spinner />
            </Typography>
        </Box>
    )
}

export default LoadingCell