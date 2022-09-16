import { FC, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { BreadCrumb } from '../../../types/navigation/breadcrumbs';
import { Icon } from '../../basics';
import Crumb from './Crumb/Crumb';

interface Props {
    crumbs: BreadCrumb[];
    baseUri: string;
};

const BreadCrumbNavBar: FC<Props> = ({ crumbs, baseUri }) => {  
    const mergedCrumbsWithStartpage = useMemo(() => ([
        { label: 'Docs', to: '.' },
        ...crumbs
    ]), [crumbs])
    
    return (
        <ul className="whitespace-nowrap">
            { mergedCrumbsWithStartpage.map((breadcrumb, index) => {
                breadcrumb = {
                    ...breadcrumb,
                    to: '/' + baseUri + '/' + breadcrumb.to
                }
                
                return (<Crumb key={ index } {...{ breadcrumb }} />)
            })}
        </ul>
    )
}

export default BreadCrumbNavBar;