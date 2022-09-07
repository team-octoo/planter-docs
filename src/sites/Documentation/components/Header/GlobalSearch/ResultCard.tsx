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
            <h3 className="text-lg -mb-1">{ result.name }</h3>
            <p className="text-stone-500">{ result.description }</p>
            <h4 className="text-stone-400 whitespace-nowrap overflow-hidden text-ellipsis text-sm mt-1 font-medium">in { result.parent.name }</h4>
        </li>
    )
}

export default ResultCard;