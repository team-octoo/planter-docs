import { FC, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { BreadCrumb } from '../../../types/navigation/breadcrumbs';
import { Icon } from '../../basics';

interface Props {
    crumbs: BreadCrumb[];
    baseUri: string;
};

const BreadCrumbNavBar: FC<Props> = ({ crumbs, baseUri }) => {
    const defaultCrumbs = useMemo<BreadCrumb[]>(() => ([
        {
            label: 'Docs',
            to: '/docs'
        }
    ]), [])
    
    return (
        <ul className="whitespace-nowrap">
            { [ ...defaultCrumbs, ...crumbs].filter(Boolean).map((breadcrumb, index) => (
                <li className="inline-flex items-center group">
                    <Link
                        to={ '/' + baseUri + '/' + breadcrumb.to || '#' } 
                        className="text-stone-500 hover:underline underline-offset-2 group-last:text-opacity-50"
                    >{ breadcrumb.label }</Link>
                    <Icon name="arrow-right-s" className="text-stone-400 group-last:hidden" />
                </li>
            ))}
        </ul>
    )
}

export default BreadCrumbNavBar;