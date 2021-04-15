import React from 'react';
import styled from 'styled-components';
import { variant, color, space } from 'styled-system';

const ButtonStyle = styled.button`
    ${color}
    ${space}
    ${variant({
    variants: {
        delete: {
            background: '#123091',
        }
    }
})}
    width: 380px;
    height: 50px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background: #321123;
    }
`;

ButtonStyle.defaultProps = {
    bg: '#000',
}

const Button = ({ text, onClick, ...props }) => {
    return <ButtonStyle {...props} onClick={onClick}>{text}</ButtonStyle>
}

export default Button;