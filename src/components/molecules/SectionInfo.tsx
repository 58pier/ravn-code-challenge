import { Box } from '@mui/material';
import SectionHeader from '../atoms/SectionHeader';
import { GeneralInfo } from '../../types/data.type';

interface SectionInfoProps {
    title: string;
    data: GeneralInfo | string[];
    type?: 'array' | 'object';
}

const SectionInfo = ({ title, data, type = 'object' }: SectionInfoProps) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            width="80%"
            marginLeft="100px"
            marginRight="100px"
        >
            <SectionHeader title={title} />
            {
                data && !Array.isArray(data) && typeof data === 'object' && Object.keys(data).map((key, index) => {
                    const value = key as keyof GeneralInfo;
                    return (
                        <li key={key}>
                            <strong>{value}:</strong> {data[value]}
                        </li>
                    )

                })
            }
        </Box>
    );
};

export default SectionInfo;
