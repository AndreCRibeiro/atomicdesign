import React from 'react';
import styled from 'styled-components';

const ContainerStyle = styled.div`
    width: 100vw;
    height: 100vh;
    background: #aaa;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Container = ({ children, ...props }) => {
    return <ContainerStyle {...props}>{children}</ContainerStyle>
}

export default Container;