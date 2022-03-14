import React, { useEffect, useState } from "react";

function MyFirstComponent(props) {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  useEffect(() => {
    console.log("salam Man Be Donia Amadam");
  }, []);
  useEffect(
    () => () => {
      console.log("Man daram Mimiram.");
    },
    []
  );
useEffect(() => {console.log("Show Avaz Shod")}, [show])
useEffect(() => {console.log("show1 Avaz Shod")}, [show1])
useEffect(() => {console.log("show ya show1 ya Props.buttonTitle Avaz Shod ")}, [show , show1 , props.buttonTitle])

  return (
    <>
      <div onClick={() => setShow(!show)}>showChange</div>
      <div onClick={() => setShow1(!show1)}>show1Change</div>
      <label>child button</label>
      <button>{props.buttonTitle}</button>
      <label>child Input</label>
      <input onChange={(e) => {props.onInputChange(e.target.value)}} />
    </>
  );
}

export default MyFirstComponent;
