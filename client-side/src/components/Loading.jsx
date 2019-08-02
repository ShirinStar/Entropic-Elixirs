import React, { useEffect } from 'react';
import Loader from 'react-loader-spinner'


function Loading(props) {
  const {} = props


 const page = () => {
  setTimeout(() => {
      this.props.history.push(`/sum`);
    }, 3000)
 }

 useEffect(() => {
  page();
 });

  return(
    <div>
    <p>Calculate the results</p>
    <Loader
     type="Puff"
     color="#92298E"
     height="100"
     width="100"
    />

  </div>
  )
}
export default Loading;
