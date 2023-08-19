import { Box, Typography } from '@mui/material'

interface SectionHeaderProps {
    title: string
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
    return (
        <Box
            sx={{
                height: '60px',
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            <Typography
                variant="h2"
                sx={{
                    marginLeft: '16px',
                    marginRight: '16px',
                    marginTop: '32px',
                    marginBottom: '8px',
                }}
            >
                {title}
            </Typography>
        </Box>
    )
}

export default SectionHeader