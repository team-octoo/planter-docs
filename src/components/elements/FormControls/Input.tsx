import { FC, InputHTMLAttributes, PropsWithChildren, useMemo, useState } from 'react';
import tw from 'tailwind-styled-components';
import styled from 'styled-components';
// @ts-ignore
import debounce from 'debounce'; 
import FieldWrapper from './FieldWrapper';
import { FormControlInputProps } from './FormControls.types';
import { useFormContext } from 'react-hook-form';

interface GeneralProps {
    isDisabled?: boolean;
    isInvalid?: boolean;
}

interface InputWrapperProps extends GeneralProps {
    children: any
}

const InputWrapper = tw.label<InputWrapperProps >`
    block
    relative
    rounded-lg
    transition-all
    ease-linear
    border border-opacity-30 hover:border-opacity-100 focus-within:border-opacity-100
    ${ (props: GeneralProps) => props.isDisabled && !props.isInvalid ? 'bg-stone-100 border-stone-300' : 'hover:border-black focus-within:hover:border-black focus-within:border-black' }
    ${ (props: GeneralProps) => props.isInvalid ? 'border-red-600 hover:border-red-600 focus-within:border-red-600 focus-within:hover:border-red-600' : '' }
`;

const InputField = FieldWrapper(tw.input`
    ${ (props: HTMLInputElement) => props.disabled ? 'cursor-not-allowed bg-stone-100 text-gray-500' : 'bg-white' }
`);

const StyledInput = styled<any>(InputField)`
    *, ::placeholder, + span {
        transition: all .2s ease;
    }

    ::placeholder {
        opacity: 0;
        transform: translateY(-1.5px);
    }
    
    :not(:placeholder-shown), :focus {
        &::placeholder {
            opacity: 1;
        }
        
        & + span {
            transform: translateY(-100%) translateX(-.3rem);
            padding: 0 0.3rem;
            font-size: 0.8rem;
            background: white;
            background: linear-gradient(180deg, rgba(255,255,255,0) 50%, rgba(255,255,255,1) 50%);
        }
    }
    
    :invalid ~ .error {
        color: red;
    }
`;

const Label = tw.span<GeneralProps>`
    absolute
    top-2
    left-3
    font-medium
    ${ (props: GeneralProps) => props.isDisabled ? 'cursor-not-allowed opacity-50' : '' }
    ${ (props: GeneralProps) => props.isInvalid ? 'text-red-600' : '' }
`;

interface Props extends FormControlInputProps {
    label?: string;
    name: string;
};

const Input: FC<Props> = ({ label, ...otherProps }) => {
    const formContext = useFormContext(); 
    
    const [ isDirty, setIsDirty ] = useState(false);
    const [ isInvalid, setIsInvalid ] = useState<ValidityState | null>(null);
    
    const generalProperties = useMemo(() => ({
        isInvalid: isInvalid ? true : false,
        isDisabled: otherProps.disabled,
    }), [otherProps])
    
    const handleValidityCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        const validity = target.validity;
        const validityCheck = target.checkValidity(); // is input valid?
        if (isDirty) {
            setIsInvalid(validityCheck ? null : validity);
        }
    }
    
    const handleValidityCheckDebounced = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        handleValidityCheck(e);
    }, 700)
    
    const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleValidityCheck(e)
    }
        
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleValidityCheckDebounced(e);
        setIsDirty(true);
    }
    
    const isControlled = useMemo(() => !!formContext, [formContext]);
    
    const contextRegister = formContext?.register(otherProps.name);
    const conditionalContextRegister = {
        ...{...( isControlled && contextRegister )}
    }
    
    return (
        <>
            <InputWrapper { ...generalProperties }>
                <StyledInput 
                    onBlur={ handleBlur }
                    onChange={ handleChange }
                    { ...conditionalContextRegister }
                    { ...otherProps }
                />
                {( label || otherProps.placeholder ) && (
                    <Label { ...generalProperties }>
                        { label || otherProps.placeholder }{ otherProps.required && '*' }
                    </Label>
                )}
            </InputWrapper>
            { isInvalid && <span className="error text-red-600 font-medium text-sm">The given value isn't valid. Value should be of type { otherProps.type }</span>}
        </>
    )
}

export default Input;