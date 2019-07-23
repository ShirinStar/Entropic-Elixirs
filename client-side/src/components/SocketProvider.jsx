import React, { useState, useEffect } from "react";
import SocketContext from "./SocketContext";
import { loginWS } from '../services/apiHelper';
import { withRouter } from 'react-router-dom';


const SocketProvider = (props) => {
  const [value, setValue] = useState({
    incoming: {}
  });

useEffect(() => {
  const ws = new WebSocket('wss://staging.projectamelia.ai/pusherman/companions/login/websocket?app=entropic'); 
    ws.addEventListener('open', function open() {
     console.log('Websocket connection established 🚀');
    })

    ws.addEventListener('message', async function incoming(msg) {
      const data = JSON.parse(msg.data);
      console.log('ws msg', data);
      setValue(data)
      const result = await loginWS(data.token);
      if (result.status == "success") {
        props.history.push('/intro1');
      }
    });
 },[value])

return(
    <SocketContext.Provider value={ value }>
      { props.children }
    </SocketContext.Provider>
  )
};
export default withRouter(SocketProvider);
