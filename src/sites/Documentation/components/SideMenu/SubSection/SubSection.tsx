import classNames from 'classnames';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { MainSection } from '../../../../../types/documentation/sections';
import ExspansionPane from '../../../../../components/elements/ExspansionPane/ExspansionPane';

interface Props {
    sections: MainSection[]
    level: number;
    baseUri?: string;
};

const SubSection: FC<Props> = ({ sections, level, baseUri }) => {
    const [ open, setOpen ] = useState(false);
    
    const toggleCollapse = () => setOpen(s => !s);
        
    return (
        <ul className="text-stone-500">
            { sections.map((section) => {
                const hasSections = !!section.sections;
                const composedUri = baseUri + '/' + section.uri;
                
                return (
                    <>
                        <li 
                            key={ section.id }
                            className={classNames(
                                'ml-0 pl-5 py-2 border-l border-stone-300 ',
                                level === 1 ? '' : ''
                            )}
                        >
                            { hasSections ? 
                                <button onClick={ toggleCollapse }>{ section.name }</button> : 
                                <Link to={ composedUri }>{ section.name }</Link>
                            }
                            { section.sections && (
                                <ExspansionPane active={ open }>
                                    <div className="mt-2">
                                        <SubSection 
                                            level={ level + 1 }
                                            sections={ section.sections } 
                                            baseUri={ composedUri }
                                        />
                                    </div>
                                </ExspansionPane>
                            )}
                        </li>
                    </>
                )
            })}
        </ul>
    )
}

export default SubSection;