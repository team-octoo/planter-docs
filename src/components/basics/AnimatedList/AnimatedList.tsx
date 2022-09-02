import { FC, PropsWithChildren, ReactElement, ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

interface Props extends PropsWithChildren, HTMLAttributes<HTMLUListElement> {}

const AnimatedList: FC<Props> = ({ children, ...otherProps }) => {
    const [ animationParent ] = useAutoAnimate<HTMLUListElement>()

    return (
        <ul ref={ animationParent } { ...otherProps }>
            { children }
        </ul>
    )
}

export default AnimatedList;