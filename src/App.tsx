import { Button, Typography } from "@mui/material"
import Spinner from "./components/atoms/Spinner"
import SectionHeader from "./components/atoms/SectionHeader"
import NoticeCell from "./components/atoms/NoticeCell"
import LoadingCell from "./components/molecules/LoadingCell"
import PersonCell from "./components/atoms/PersonCell"
import DataCell from "./components/atoms/DataCell"

const App = () => {
    return (
        <>
            <Button variant="contained" >Asd</Button>
            <Typography variant="h2" >H2</Typography>
            <Typography variant="h2_high_emphasis" >H2 high emphasis</Typography>
            <Typography variant="h2_low_emphasis" >H2 low emphasis</Typography>
            <Typography variant="body1" >Body1</Typography>
            <Typography variant="body_low_emphasis" >Body low emphasis</Typography>
            <Spinner />
            <SectionHeader title="General Information" />
            <NoticeCell title="Failed to Load Data" />
            <LoadingCell />
            <PersonCell name="Luke Skywalker" description="Jedi" />
            <DataCell />
        </>
    )
}

export default App