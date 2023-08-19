import { Box } from "@mui/material"
import { PersonStructureInfo } from "../../types/data.type"
import SectionInfo from "../molecules/SectionInfo"

interface InfoProps {
    personSelected: PersonStructureInfo | null
}

const Info = ({ personSelected }: InfoProps) => {
    return (
        <>
            {
                personSelected && <Box
                    display="flex"
                    justifyContent="center"
                    width="70%"
                >
                    <SectionInfo data={personSelected.generalInfo} title="General Information" />
                </Box>
            }
        </>
    )
}

export default Info