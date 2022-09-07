import classNames from 'classnames';
import { FC, PropsWithChildren, HTMLAttributes } from 'react';

interface Props extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {};

const CenteringLayout: FC<Props> = ({ children, className, ...otherProps }) => {
    return (
        <div 
            className={classNames(
                'container mx-auto w-full h-full',
                className
            )} 
            { ...otherProps }
        >
            { children }
        </div>
    )
}

export default CenteringLayout;