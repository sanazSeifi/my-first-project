import { useState } from "react";
import "./App.css";
import MyFirstComponent from "./MyFirstComponent";

function App() {
  const [childInputVal, setChildInputVal] = useState("");
  const [inputVal, setInputVal] = useState("");
  const [myFirstComponentShow, setMyFirstComponentShow] = useState(false);
  return (
    <div className="Sanaz">
      <label>parent Input</label>
      <input value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
      <p>{inputVal}</p>
      <label>parent button</label>
      <button>{childInputVal}</button>
      <div onClick={() => setMyFirstComponentShow(!myFirstComponentShow)}>toggel</div>
      {/* {myFirstComponentShow === true ? <MyFirstComponent buttonTitle={"Jafar"} /> : undefined} */}
      <MyFirstComponent buttonTitle={inputVal} onInputChange= {(childInputVal1) => setChildInputVal(childInputVal1)} />
    </div>
  );
}

export default App;
