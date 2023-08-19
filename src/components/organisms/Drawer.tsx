import { Box } from '@mui/material'
import { PersonStructureInfo } from '../../types/data.type'
import PersonCell from '../molecules/PersonCell'
import LoadingCell from '../molecules/LoadingCell'
import NoticeCell from '../atoms/NoticeCell'

interface DrawerProps {
    peopleData: PersonStructureInfo[] | null
    setPersonSelected: (person: PersonStructureInfo) => void
    loading: boolean
    error?: boolean
}

const Drawer = ({ peopleData, setPersonSelected, loading, error }: DrawerProps) => {
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
                error && <NoticeCell title='Failed to Load Data' />
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
export default Drawer