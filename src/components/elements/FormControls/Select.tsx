import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import FieldWrapper from './FieldWrapper';
import { FormControlInputProps } from './FormControls.types';

type GeneralProps = {
    isDisabled?: boolean;
}

interface InputWrapperProps extends GeneralProps {
    children: any;
}

const InputWrapper = tw.label<InputWrapperProps>`
    block
    relative
    border-[1.5px]
    rounded-lg
    transition-all
    ease-linear
    border-opacity-30
    hover:border-opacity-100
    focus-within:border-opacity-100
    ${ (props: GeneralProps) => props.isDisabled ? 'bg-stone-100 border-stone-300' : 'hover:border-black focus-within:hover:border-black focus-within:border-black' }
`;

const SelectField = FieldWrapper(tw.select`
   pl-2
`);

const Label = styled.span<GeneralProps>`
    background: linear-gradient(180deg, rgba(255,255,255,0) calc(50% - 2px), rgba(255,255,255,1) calc(50% - 2px));
`;

interface Props extends FormControlInputProps {
    children: any;
    label?: string;
};

const Select: FC<Props> = ({ children, label, ...otherProps }) => {
    const generalProperties = {
        isDisabled: otherProps.disabled,
    }
    
    return (
        <InputWrapper { ...generalProperties }>
            <SelectField { ...otherProps }>
                { children }
            </SelectField>
            { label && (
                <Label 
                    className={classNames(
                        'absolute top-0 left-2 font-medium -translate-y-1/2 -translate-[.3rem] text-[.8rem] px-[.3rem] bg-white',
                        generalProperties.isDisabled && 'cursor-not-allowed opacity-50'
                    )}
                    { ...generalProperties }
                >{ label }{ otherProps.required && '*' }</Label>
            )}
        </InputWrapper>
    )
}

export default Select;