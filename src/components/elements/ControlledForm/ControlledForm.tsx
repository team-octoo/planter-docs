import { FC, FormHTMLAttributes, PropsWithChildren, useCallback, useMemo } from 'react';
import { useForm, FormProvider, useFormContext } from "react-hook-form";

interface Props extends PropsWithChildren, FormHTMLAttributes<HTMLFormElement> {
    testing?: boolean;
};

const ControlledForm: FC<Props> = ({ children, testing = false, onSubmit }) => {
    const methods = useForm();
    
    const handleSubmit = useCallback((data: any) => {
        if (testing) {
            alert(data);
            console.log(data);
        } else {
            onSubmit?.(data);
        }
    }, [testing]);
      
    return (
        <FormProvider {...methods} >
            <form onSubmit={methods.handleSubmit(handleSubmit)}>
                { children }
            </form>
        </FormProvider>
    )
}

export default ControlledForm;