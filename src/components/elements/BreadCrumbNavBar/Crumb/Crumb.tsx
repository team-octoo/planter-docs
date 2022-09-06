import { FC } from 'react';
import { Link } from 'react-router-dom';
import { BreadCrumb } from '../../../../types/navigation/breadcrumbs';
import { Icon } from '../../../basics';

interface Props {
    breadcrumb: BreadCrumb;
};

const Crumb: FC<Props> = ({ breadcrumb }) => {
    return (
        <li className="inline-flex items-center group">
            <Link
                to={ breadcrumb.to || '#' } 
                className="text-stone-500 hover:underline underline-offset-2 group-last:text-opacity-50 group-last:pointer-events-none"
            >{ breadcrumb.label }</Link>
            <Icon name="arrow-right-s" className="text-stone-400 group-last:hidden" />
        </li>
    )
}

export default Crumb;