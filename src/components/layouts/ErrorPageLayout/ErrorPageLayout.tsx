import { FC, PropsWithChildren, ReactNode } from 'react';
import { Button, Icon } from '../../basics';

interface Props {
    icon?: string;
    requestUnit?: string;
    error?: string;
    action?: ReactNode;
};

const RetryButton = (
    <Button 
        className=" mt-4" icon="restart"
        onClick={() => window.location.reload()}
    >Try again</Button>
)

const ErrorPageLayout: FC<Props> = ({ requestUnit, error, icon = 'signal-wifi-error', action }) => {
    const Action = () => action ? <>{ action }</> : RetryButton;
    
    return (
        <div className="h-full flex items-center justify-center">
            <div>
                <Icon name={ icon } size="2rem" className="mb-2 mx-auto" />
                <h3 className="text-2xl font-medium text-center">{ error || 'Something went wrong' }</h3>
                <p className="text-center text-stone-600">We couldn't retrieve { requestUnit || 'documentation' } data</p>
                <div className="mx-auto mt-4 w-fit">
                    <Action />
                </div>
            </div>
        </div>
    )
}

export default ErrorPageLayout;