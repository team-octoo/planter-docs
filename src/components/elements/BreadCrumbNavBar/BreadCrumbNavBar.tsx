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
    return (
        <ul className="whitespace-nowrap">
             <li className="inline-flex items-center group">
                <Link
                    to="/docs" 
                    className="text-stone-500 hover:underline underline-offset-2 group-last:text-opacity-50 group-last:pointer-events-none"
                >Docs</Link>
                <Icon name="arrow-right-s" className="text-stone-400 group-last:hidden" />
            </li>
            { crumbs.map((breadcrumb, index) => {
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