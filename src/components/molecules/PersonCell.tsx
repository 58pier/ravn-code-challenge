import { Box, IconButton, Typography } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { PersonStructureInfo } from '../../types/data.type';

interface PersonCellProps {
    person: PersonStructureInfo
    setPersonSelected: (person: PersonStructureInfo) => void
}

const PersonCell = ({ person, setPersonSelected }: PersonCellProps) => {
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
                <Typography variant="h2">{person.generalInfo.name}</Typography>
                <Typography variant="body_low_emphasis">{person.generalInfo.race}</Typography>
            </Box>
            <Box
                marginRight="16px"
            >
                <IconButton aria-label="Ver" onClick={() => setPersonSelected(person)}>
                    <KeyboardArrowRightIcon sx={{
                        fontSize: '24px',
                    }} />
                </IconButton>
            </Box>
        </Box>
    )
}


export default PersonCell