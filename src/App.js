import { useState } from "react";
import "./App.css";
import MyFirstComponent from "./MyFirstComponent";

function App() {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  return (
    <div className="Sanaz">
      <input value={value} onClick={(e) => setValue(e.target.value)} />
      <p>{value}</p>
      <div onClick={() => setShow(!show)}>toggel</div>
      {show === true ? <MyFirstComponent /> : undefined}
    </div>
  );
}

export default App;
