import { Box } from "@mui/material"
import { PersonStructureInfo } from "../../types/data.type"
import SectionInfo from "../molecules/SectionInfo"

interface InfoProps {
    personSelected: PersonStructureInfo | null
}

const Info = ({ personSelected }: InfoProps) => {
    return (
        <Box
            width="70%"
        >
            {
                personSelected && <Box
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                    alignItems="center"
                >
                    <SectionInfo data={personSelected.generalInfo} title="General Information" />
                    {
                        personSelected.vehiclesInfo.length > 0 && <SectionInfo data={personSelected.vehiclesInfo} title="Vehicles" />
                    }
                </Box>
            }
        </Box>
    )
}

export default Info