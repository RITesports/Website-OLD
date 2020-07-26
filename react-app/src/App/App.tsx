import React from 'react';
import Konami from 'react-konami-code';

import { Bongo_Ritchie_Cursor } from '../assets/images';
import Header from '../components/Header';
import Routes from '../Routes';

const App: React.FC = () => (
  <>
    <Konami action={() => {
      document.body.style.cursor = `url(${Bongo_Ritchie_Cursor}) 16 16, auto`;
    }}
    />
    <Header />
    <Routes />
  </>
);

export default App;
