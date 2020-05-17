import React from 'react';

import Toggle from './components/Toggle';
import { ToggleProvider } from './contexts/ContextProvider'

const App = () => {
  return <ToggleProvider>
    <Toggle />
  </ToggleProvider>
}

export default App;

