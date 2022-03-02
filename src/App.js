
import { useState } from 'react';
import './App.css';

function App(){
  const [value, setValue] = useState("");
  return(
  <div className='Sanaz'>
    <input value={value} onClick = {(e) => setValue(e.target.value)} />
    <p>{value}</p>

  </div>
    
  )
}

export default App;
