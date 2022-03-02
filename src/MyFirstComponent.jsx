import React, { useEffect, useState } from "react";

function MyFirstComponent() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  useEffect(() => {
    console.log("componentMount");
  }, []);
  useEffect(
    () => () => {
      console.log("componentWillUnmount");
    },
    []
  );
useEffect(() => {console.log("showChange")}, [show])
useEffect(() => {console.log("show1Change")}, [show1])
useEffect(() => {console.log("show or show1Change")}, [show , show1])

  return (
    <>
      <div onClick={() => setShow(!show)}>showChange</div>
      <div onClick={() => setShow1(!show1)}>show1Change</div>
    </>
  );
}

export default MyFirstComponent;
