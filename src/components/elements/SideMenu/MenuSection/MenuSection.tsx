import classNames from 'classnames';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuSection as Section } from '../../../../types/navigation/sections';
import { Icon } from '../../../basics';
import { ExspansionPane } from '../../../elements';
import SubSection from '../SubSection/SubSection';

interface Props extends Section {}

const MenuSection: FC<Props> = ({ name, icon, sections, id }) => {
    const [ open, setOpen ] = useState(false);
    
    const toggleCollapse = () => setOpen(s => !s);
    
    return (
        <div className="w-full flex items-baseline group">
            <div>
                <Link
                    to={ id}
                    onClick={ toggleCollapse }
                    className={classNames(
                        'flex items-center mb-2',
                        open ? 'text-black' : 'text-stone-500'
                    )}
                >
                    <div className="mr-4">
                        { icon ? (
                            <Icon name={ icon } className="group-hover:text-black" />
                        ) : (
                            <Icon name="arrow-right-s" className={classNames(
                                'group-hover:text-black',
                                open ? 'rotate-0' : 'rotate-90'
                            )} />
                        )}
                    </div>
                    <span className="text-lg font-medium group-hover:text-black">{ name }</span>
                </Link>
                { sections && (
                    <ExspansionPane active={ open }>
                        <SubSection level={ 1 } sections={ sections } baseUri={ id } />
                    </ExspansionPane>
                )}
            </div>
        </div>
    )
}

export default MenuSection;