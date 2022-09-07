import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import Icon from '../Icon/Icon';
import BaseButton from './BaseButton';
import { IButton } from './Button.types';

const Button: FC<IButton> = ({ children, icon, iconPlacement = 'end', ...otherProps }) => {
    return (
        <BaseButton 
            { ...otherProps }
        >
            {( icon && iconPlacement === 'start') && <Icon name={ icon } />}
            { children }
            {( icon && iconPlacement === 'end') && <Icon name={ icon } />}
        </BaseButton>
    )
}

export default Button;