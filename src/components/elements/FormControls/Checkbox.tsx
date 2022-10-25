import { FC, InputHTMLAttributes, useRef, useEffect } from 'react';
import tw from 'tailwind-styled-components';

type WrapperProps = {
    isDisabled?: boolean;
    children: any;
}

const Wrapper = tw.label<WrapperProps>`
    relative
    flex
    items-baseline
    ${ (props: WrapperProps) => props.isDisabled ? 'opacity-50' : '' }
`;

type LabelProps = {
    isDisabled?: boolean;
}

const Label = tw.span<LabelProps>`
    font-medium
    ml-3
    ${ (props: LabelProps) => props.isDisabled ? 'text-gray-500' : '' }
`;

type InputProps = InputHTMLAttributes<HTMLInputElement>

interface Props extends InputProps {
    children?: any;
    label?: string;
    type?: 'checkbox' | 'radio';
    disabled?: boolean;
};

const Checkbox: FC<Props> = ({ children, label, type = 'checkbox', ...otherProps }) => {
    const checkboxRef = useRef<any>();
    
    useEffect(() => {
        if (checkboxRef.current && (otherProps?.disabled !== undefined || otherProps?.disabled !== null)) {  
            checkboxRef.current.disabled = otherProps.disabled as boolean;
        }
    }, [ otherProps?.disabled ])
    
    return <Wrapper>
        <input type={ type } { ...otherProps } ref={ checkboxRef } />
        { label && (
            <Label isDisabled={ otherProps?.disabled }>{ label }</Label>
        )}
        { children }
    </Wrapper>
}

export default Checkbox;