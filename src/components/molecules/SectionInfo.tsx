import { Box } from '@mui/material';
import SectionHeader from '../atoms/SectionHeader';
import { GeneralInfo } from '../../types/data.type';
import DataCell from './DataCell';

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
            {!Array.isArray(data) && Object.keys(data).map((key) => {
                const keyType = key as keyof GeneralInfo;
                return (
                    <DataCell key={key} key_name={data[keyType].label} value={data[keyType].value} />
                )
            })}
            {Array.isArray(data) && data.map((item, index) => {
                return (
                    <DataCell key={index} key_name={item} />
                )
            })}
        </Box>
    );
};

export default SectionInfo;
