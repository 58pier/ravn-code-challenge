import { Box } from '@mui/material'
import { PersonStructureInfo } from '../../types/data.type'
import PersonCell from '../molecules/PersonCell'
import LoadingCell from '../molecules/LoadingCell'

interface DrawerProps {
    peopleData: PersonStructureInfo[] | null
    setPersonSelected: (person: PersonStructureInfo) => void
    loading: boolean
}

const Drawer = ({ peopleData, setPersonSelected, loading }: DrawerProps) => {
    return (
        <Box
            borderRight={1}
            height="100%"
            width="30%"
            sx={{
                borderRightColor: '#dbdbdb',
            }}
        >
            {
                loading && <LoadingCell />
            }
            {
                peopleData && peopleData.map((person, index) => (
                    <PersonCell
                        key={index}
                        person={person}
                        setPersonSelected={setPersonSelected}
                    />
                ))
            }
        </Box>
    )
}
/* <Box
                        key={index}
                        onClick={() => setPersonSelected(person)}
                    >
                        {person.generalInfo.name}
                        {person.generalInfo.race + ' from' + person.generalInfo.planet}
                    </Box> */
export default Drawer