import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  useEffect(() => {
    console.log(value);
  }, []);

  return (
    <div>
      <p>와우</p>
    </div>
  );
}

export default App;

// import React from 'react';
// import './App.css';

// function App() {
//   const a = "hello"

//               return (
//     <div>
//                       <p>와우</p>
//     </div>
//           );
// }

// export default App;
