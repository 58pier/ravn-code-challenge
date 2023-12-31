import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import Header from '../atoms/Header'
import Drawer from '../organisms/Drawer'
import Info from '../organisms/Info'
import { PersonStructureInfo } from '../../types/data.type';
import { fetchPeople } from '../../services/getRequests'

const Main = () => {

    const [dataPeople, setDataPeople] = useState<PersonStructureInfo[] | null>(null)
    const [personSelected, setPersonSelected] = useState<PersonStructureInfo | null>(null)
    const [nextUrl, setNextUrl] = useState('https://swapi.dev/api/people/')

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const fetchMoreData = async () => {
        setLoading(true)
        fetchPeople(nextUrl)
            .then(data => {
                if (!data || error) {
                    setLoading(false)
                    setError(true)
                    return
                }
                const { nextUrl: nextUrlNew, data: dataPrepared } = data
                if (dataPeople) {
                    setDataPeople([...dataPeople, ...dataPrepared])
                }
                setNextUrl(nextUrlNew)
                setLoading(false)
            })
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            fetchPeople(nextUrl)
                .then(data => {
                    if (!data || error) {
                        setLoading(false)
                        setError(true)
                        return
                    }
                    const { nextUrl: nextUrlNew, data: dataPrepared } = data
                    setDataPeople(dataPrepared)
                    setNextUrl(nextUrlNew)
                    setLoading(false)
                })
        }
        fetchData()
    }, [])



    return (
        <Box>
            <Header />
            <Box
                display="flex"
                justifyContent="flex-start"
                flexDirection="row"
                height="calc(100vh - 52px)"
            >
                <Drawer peopleData={dataPeople} setPersonSelected={setPersonSelected} loading={loading} error={error} fetchMoreData={fetchMoreData} />
                <Info personSelected={personSelected} />
            </Box>
        </Box>
    )
}

export default Main