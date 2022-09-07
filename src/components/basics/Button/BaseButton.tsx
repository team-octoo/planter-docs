import tw from "tailwind-styled-components";
import { IButton } from "./Button.types";

const BaseButton = tw.button<IButton>`
    flex items-center gap-2 
    py-1 px-3 
    border rounded-full border-black
    font-medium
    outline-stone-300 outline-0 focus:outline focus:outline-4
    ${(props) => props?.theme}
    ${(props) => props?.theme === 'main' && 'border-black'}
    ${(props) => props?.theme === 'secondary' && 'border-stone-300'}
`;

export default BaseButton;