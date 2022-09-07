import { FC, SVGProps } from 'react';
import { ReactComponent as Logo } from '../../../assets/logos/logo_octoo.svg';

interface Props extends SVGProps<SVGSVGElement> {};

const LogoOctoo: FC<Props> = (props) => {
    return (
        <Logo { ...props } />
    )
}

export default LogoOctoo;