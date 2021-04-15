import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.h1``;

const Title = ({ titleText, ...props }) => {
    return <TitleStyle {...props}>{titleText}</TitleStyle>
}

export default Title;