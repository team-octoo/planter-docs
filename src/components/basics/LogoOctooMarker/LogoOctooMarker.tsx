import { FC, SVGProps } from 'react';
import { ReactComponent as Marker } from '../../../assets/logos/logo_octoo_marker.svg';

interface Props extends SVGProps<SVGSVGElement> {};

const LogoOctooMarker: FC<Props> = (props) => {
    return (
        <Marker { ...props } />
    )
}

export default LogoOctooMarker;