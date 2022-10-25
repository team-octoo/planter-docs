import { useCallback } from 'react';
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../Icon/Icon';
import BaseButton from './BaseButton';
import { IButton } from './Button.types';

const Button: FC<IButton> = ({ children, icon, iconPlacement = 'end', to, onClick, noIconTheme, ...otherProps }) => {
    const navigate = useNavigate()
    const handleClick = useCallback((event: any) => {
        if (to) {
            navigate(to)
        } else if (onClick) {
            onClick(event);
        }
    }, [to])
    
    return (
        <BaseButton
            onClick={ handleClick }
            { ...otherProps }
        >
            {( icon && iconPlacement === 'start') && <Icon noStyle={ noIconTheme ? true : false } name={ icon } />}
            { children }
            {( icon && iconPlacement === 'end') && <Icon noStyle={ noIconTheme ? true : false } name={ icon } />}
        </BaseButton>
    )
}

export default Button;