import React from 'react';
import Konami from 'react-konami-code';

import { BongoRitchie_Cursor } from '../assets';
import Header from '../components/Header';
import Routes from '../Routes';

const App: React.FC = () => (
  <>
    <Konami action={() => {
      document.body.style.cursor = `url(${BongoRitchie_Cursor}) 16 16, auto`;
    }}
    />
    <Header />
    <div style={{ fontSize: 40 }}>Braden Is Here</div>
    <Routes />
  </>
);

export default App;
