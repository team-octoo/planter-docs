import styled from "styled-components";

const Aside = styled.aside`
    box-shadow: inset -16px 0px 15px -14px #00000010;
    
    & > button {
        transform: scale(0) translateX(50%);
    }
    
    &:hover > button {
        transform: scale(1) translateX(50%);
    }
`;

export default Aside;