import React from 'react';
import './App.scss';
import { Background, Card } from './component'
import { Provider } from './services/context';

function App() {
  return (
    <Provider>
      <div className="app-wrapper">
        <Background />
        <Card />
      </div>
    </Provider>
  );
}

export default App;
