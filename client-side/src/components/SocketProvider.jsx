import React, { useState, useEffect } from 'react';
import SocketContext from './SocketContext';

const SocketProvider = (props) => {
  const [value, setValue] = useState('init');


  function openSocket(timeout) {
    const ws = new WebSocket('wss://staging.projectamelia.ai/pusherman/companions/login/websocket?app=entropic');
    
    ws.onmessage = (event) => {
	    const tapData = JSON.parse(event.data);
	    const token = tapData.token;
	    //setValue(token);
	    const eventData = { detail: {token} };
	    console.log("got an websocket message", token);
	    let tapEvent = new CustomEvent('rfidtap', eventData);
	    window.dispatchEvent(tapEvent);
    };

    ws.onclose = (event) => {
	    timeout = Math.min((timeout+1000) * 2, 30000);
	    console.log("trying to reconnect to websocket");
	    setTimeout( () => {
		    console.log("Attempting a reconnect");
		    openSocket(timeout);
	    }, timeout)
    };
  };

useEffect(() => {
    openSocket(0);
 },[value])

return (
    <SocketContext.Provider value={value}>
      { props.children }
    </SocketContext.Provider>
  )
};
export default SocketProvider;
