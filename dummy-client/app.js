import React from 'react';

function App(){

  const ws = new WebSocket('ws://localhost:8080');

  ws.addEventListener('open', function open() {
    console.log('ws connected');
    ws.send('something from dummy')
  });

  const handleLogin = () => {
    ws.send('login');
  }

  ws.addEventListener('message', function incoming(data) {
    console.log(data);
  });


  return(
    <div>
    <h1>hello world</h1>
    <button onClick={handleLogin}>login</button>
    </div>
  )
}

export default App;
