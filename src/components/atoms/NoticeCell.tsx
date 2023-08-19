import { Box, Typography } from "@mui/material"

interface NoticeCellProps {
    title: string
}

const NoticeCell = ({ title }: NoticeCellProps) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: '52px',
            }}
        >
            <Typography
                variant="h2_high_emphasis"
                sx={{
                    marginLeft: '16px',
                    marginRight: '16px',
                }}
            >
                {title}
            </Typography>
        </Box>
    )
}

export default NoticeCell