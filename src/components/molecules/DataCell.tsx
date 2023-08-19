import { Box, Typography } from '@mui/material'

interface DataCellProps {
    key_name: string;
    value?: string;
}

const DataCell = ({ key_name, value }: DataCellProps) => {
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
                variant="h2_low_emphasis"
            >
                {key_name}
            </Typography>
            <Typography
                marginRight="16px"
                variant="h2"
            >
                {value}
            </Typography>
        </Box>
    )
}

export default DataCell