import { FC, PropsWithChildren } from 'react';
import useTestCounter from '../../../state/hooks/useTestCounter/useTestCounter';
import { Button } from '../../basics';

interface Props extends PropsWithChildren {};

const TestCounter: FC<Props> = ({ children }) => {
    const { count, increase, clearCount, setToOne } = useTestCounter();
    // const onlyCount = useTestCounter(s => s.count);
    
    console.log('RERENDER');
    
    return (
        <div className="border border-stone-300 bg-white w-fit rounded-lg p-4 flex items-center">
            <span className="mr-4 text-xl font-medium">{ count }</span>
            <div className="flex items-center gap-3">
                <Button onClick={ increase } icon="add" />
                <Button onClick={ clearCount } icon="close" />
                <Button onClick={ setToOne } icon="hashtag" noIconTheme />
                <Button>useless</Button>
            </div>
        </div>
    )
}

export default TestCounter;