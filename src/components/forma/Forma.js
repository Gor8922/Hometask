import React, { useState } from "react";

export default function Forma() {
  const [inputValue, setInputValue] = useState([
    {
      id: Math.random(),
      text: "",
      isTyped: false,
    },
  ]);

  const createLi = (e, id) => {
    let inputMap = inputValue.map((item) => {
      if (item.id === id) {
        item.text = e.target.value;
        item.isTyped = true;
      }
      return item;
    });

    inputMap = inputMap.filter((item) => {
      return item.text !== "" && item.isTyped === true;
    });

    let checkEvery = inputMap.every((item) => {
      return item.isTyped === true;
    });

    if (checkEvery) {
      inputMap.push({
        id: Math.random(),
        text: "",
        isTyped: false,
      });
    }
    setInputValue(inputMap);
  };

  return (
    <div className="wrapper">
      {inputValue.map((item, i) => {
        return (
          <div key={item.id} className="row">
            <div>{i + 1}.</div>
            <input type="text" onChange={(e) => createLi(e, item.id)} />
          </div>
        );
      })}
    </div>
  );
}
