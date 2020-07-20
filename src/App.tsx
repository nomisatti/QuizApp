import React from 'react';

import AppRouter from './components/AppRouter'
import { SettingProvider } from './context/SettingContext'

// importing sytles
import "./App.css"

function App() {


  return (
    <SettingProvider>
      <AppRouter />
    </SettingProvider>

  );
}

export default App;
