import React, { useState } from "react";

function App() {
  const [inputList, setInputList] = useState([{ titulo: "", autor: "",lastName2: "" }]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { titulo: "", autor: "",lastName2: "" }]);
  };

  return (
    <div className="App">
      <h3><a href="https://cluemediator.com">Clue Mediator</a></h3>
      {inputList.map((x, i) => {
        return (
          <div className="box">
            <input
              name="titulo"
              placeholder=" introduce titulo"
              value={x.firstName}
              onChange={e => handleInputChange(e, i)}
            />
            <input
              className="ml10"
              name="autor"
              placeholder=" introduce autor"
              value={x.lastName}
              onChange={e => handleInputChange(e, i)}
            />
            <input
              className="ml10"
              name="lastName2"
              placeholder="Enter Last Name"
              value={x.lastName2}
              onChange={e => handleInputChange(e, i)}
            />
            <div className="btn-box">
              {inputList.length !== 1 && <button
                className="mr10"
                onClick={() => handleRemoveClick(i)}>Remove</button>}
              {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
            </div>
          </div>
        );
      })}
      <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
    </div>
  );
}

export default App;
