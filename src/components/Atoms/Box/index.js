import React from 'react';
import styled from 'styled-components';

const BoxStyle = styled.div`
    width: 450px;
    height: 450px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
`;

const Box = ({ children, ...props }) => {
    return <BoxStyle {...props}>{children}</BoxStyle>
}

export default Box;