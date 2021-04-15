import React, { useState } from 'react';
import GlobalStyles from './styles/global';

import * as Atoms from './components/Atoms';
import * as Organisms from './components/Organisms';

function App() {
  const [formInput, setFormInput] = useState({
    user: '',
    password: '',
  });

  const handleClick = () => {
    console.log({ formInput })
  };

  return (
    <>
      <GlobalStyles />
      <Atoms.Container>
        <Organisms.Form
          title="Bem-vindo"
          text="Preencha seus dados"
          onChangePass={(e) => setFormInput(prevState => ({ ...prevState, user: e.target.value }))}
          onChangeUser={(e) => setFormInput(prevState => ({ ...prevState, password: e.target.value }))}
          buttonText="ENTRAR"
          buttonClick={handleClick}
        />
      </Atoms.Container>

    </>
  );
}

export default App;