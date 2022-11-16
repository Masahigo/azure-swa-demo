import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('api/message')
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          setMessage(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);

  return <div>{message.text}</div>;
}

export default App;
