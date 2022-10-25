import dayjs, { ConfigType } from 'dayjs';
import { FC } from 'react';

interface Props {
    children: ConfigType;
    format?: string;
};

const Date: FC<Props> = ({ children: date, format }) => {
    const formatted = dayjs(date).format(format);
    
    return (<>{ formatted }</>)
}

export default Date;