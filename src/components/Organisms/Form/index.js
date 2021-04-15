import React from 'react';
import * as Atoms from '../../Atoms'
import * as Molecules from '../../Molecules'

const Form = ({ title, text, onChangeUser, onChangePass, buttonClick, buttonText }) => {
    return (
        <Atoms.Box>
            <Atoms.Title titleText={title} />
            <Atoms.Text text={text} />
            <Molecules.FormInput mb={20} label="Usuário/Email" placeholder="Usuário/Email" onChange={onChangeUser} />
            <Molecules.FormInput mb={50} label="Senha" placeholder="Senha" type="password" onChange={onChangePass} />
            <Atoms.Button text={buttonText} onClick={buttonClick} />
        </Atoms.Box>
    )
}

export default Form;