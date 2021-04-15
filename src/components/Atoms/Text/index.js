import React from 'react';
import styled from 'styled-components';

const TextStyle = styled.p``;

const Text = ({ text, ...props }) => {
    return <TextStyle {...props}>{text}</TextStyle>
}

export default Text;