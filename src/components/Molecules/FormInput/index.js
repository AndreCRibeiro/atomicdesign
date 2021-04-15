import React from 'react';
import styled from 'styled-components';
import * as Atoms from '../../Atoms'
import { variant, color, space } from 'styled-system';

const FormInputStyle = styled.div`
    ${space}
`;

const FormInput = ({ label, placeholder, type, ...props }) => {
    return (
        <FormInputStyle {...props}>
            <Atoms.Text text={label} />
            <Atoms.Input placeholder={placeholder} type={type} />
        </FormInputStyle>
    )
}

export default FormInput;