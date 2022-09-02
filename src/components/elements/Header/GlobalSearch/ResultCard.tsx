import { FC, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLLIElement> {
    result?: any;
};

const ResultCard: FC<Props> = ({ result, ...otherProps }) => {
    return (
        <li 
            className="col-span-1 block border border-stone-200 p-5 rounded-lg"
            { ...otherProps }
        >
            <h3 className="">{ result.name }</h3>
            <h4 className="text-stone-400 whitespace-nowrap overflow-hidden text-ellipsis">{ result.parent.name }</h4>
        </li>
    )
}

export default ResultCard;