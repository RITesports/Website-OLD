import React from 'react';
import Konami from 'react-konami-code';

import { RitchieBongoCursor } from '../assets/images';

import Header from '../components/Header';
import Routes from '../Routes';

const App: React.FC = () => (
  <>
    <Konami action={() => {
      document.body.style.cursor = `url(${RitchieBongoCursor}) 16 16, auto`;
    }}
    />
    <Header />
    <Routes />
  </>
);

export default App;
