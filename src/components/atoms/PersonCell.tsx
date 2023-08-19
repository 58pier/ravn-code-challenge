import { Box, IconButton, Typography } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface PersonCellProps {
    name: string
    description: string
}

const PersonCell = ({ name, description }: PersonCellProps) => {
    return (
        <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            height="60px"
            marginLeft="16px"
            borderBottom="1px solid rgba(0, 0, 0, 0.10);"

        >
            <Box
            >
                <Typography variant="h2">{name}</Typography>
                <Typography variant="body_low_emphasis">{description}</Typography>
            </Box>
            <Box
                marginRight="16px"
            >
                <IconButton aria-label="Ver">
                    <KeyboardArrowRightIcon sx={{
                        fontSize: '24px',
                    }} />
                </IconButton>
            </Box>
        </Box>
    )
}


export default PersonCell