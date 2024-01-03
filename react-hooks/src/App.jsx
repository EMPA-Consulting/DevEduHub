import React, { useState } from 'react';
import UseState from './most-known-hooks/useState';
import UseEffect from './most-known-hooks/useEffect';
import UseContext from './most-known-hooks/useContext/UseContext';

function App() {
  const [activeHook, setActiveHook] = useState('');

  const renderHook = () => {
    switch (activeHook) {
      case 'useState':
        return <UseState />;
      case 'useEffect':
        return <UseEffect />;
      case 'useContext':
        return < UseContext />;

      default:
        return null;
    }
  };

  return (
    <div>
      <h1>React Hooks Simplified</h1>
      {renderHook()}
      <br />

      {activeHook ? (
        <button style={{ marginTop: '60px' }} onClick={() => setActiveHook('')}>Back</button>
      ) : (
        <>
          <button onClick={() => setActiveHook('useState')}>useState Hook</button>
          <button onClick={() => setActiveHook('useEffect')}>useEffect Hook</button>
          <button onClick={() => setActiveHook('useContext')}>useContext Hook</button>


        </>
      )}
    </div>
  );
}

export default App;