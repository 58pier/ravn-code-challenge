import { Box, Typography } from '@mui/material'
import { DEFAULT_COLOR } from '../../constants'
const Header = () => {
    return (
        <Box
            paddingLeft='33px'
            height='52px'
            display='flex'
            alignItems='center'
            sx={{
                backgroundColor: DEFAULT_COLOR
            }}
        >
            <Typography variant="h2" color="#ffff" >Ravn Star Wars Registry</Typography>
        </Box>

    )
}

export default Header