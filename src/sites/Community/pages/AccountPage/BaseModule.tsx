import { FC, PropsWithChildren } from 'react';
import { Icon } from '../../../../components/basics';
import { ExspansionPane } from '../../../../components/elements';

interface Props extends PropsWithChildren {
    module: any;
    open?: boolean;
    collapse: boolean;
    onCollapse: () => void;
};

const BaseModule: FC<Props> = ({ module, open, collapse = true, children, onCollapse }) => {
    const handleCollapse = () => {
        onCollapse();
    }
    
    return (
        <div 
            className="px-6 group"
        >
            <div className="border-b group-last:border-b-0 py-5">
                <button 
                    onClick={ handleCollapse }
                    className="w-full flex items-center justify-between cursor-pointer"
                >
                    <div>
                        <h4 className="text-left text-lg font-medium">{ module.label }</h4>
                        <p className="text-left font-medium text-sm text-stone-500">{ module?.description }</p>
                    </div>
                    { collapse && (
                        <div className={ open ? 'rotate-180' : 'rotate-0' }>
                            <Icon name="arrow-down-s" size="1.6rem" />
                        </div>
                    )}
                </button>
                
                <ExspansionPane active={ collapse === false || open }>
                    <div className="mt-4">
                        { children }
                    </div>
                </ExspansionPane>
            </div>
        </div>
    )
}

export default BaseModule;