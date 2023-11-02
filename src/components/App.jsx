import React, { useState } from "react";
import "../index.css";

function App() {
  const [calculated, setCalculated] = useState("");
  const [expression, setExpression] = useState("");
  const [current, setCurrent] = useState(0);

  const handleClick = (e) => {
    const value = e.target.innerText;
    if (value === "*" || value === "/" || value === "+" || value === "-") {
      if (expression === "") {
        if (!calculated) {
          setCalculated(current);
        }
        setExpression(value);
        setCurrent(0);
      } else {
        setExpression(value);
      }
    } else if (value === "=") {
      if (expression === "") {
        return;
      }
      setCalculated(eval(calculated + expression + current));
      setCurrent(0);
      setExpression("");
    } else if (value === "AC") {
      setCalculated("");
      setCurrent(0);
      setExpression("");
    } else {
      if (expression === "" && calculated !== "") {
        return;
      }
      setCurrent(current * 10 + parseInt(value));
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="expression">{calculated + "" + expression}</div>
        <div className="result">{current}</div>
      </div>

      <div className="buttons">
        <button onClick={(e) => handleClick(e)}>7</button>
        <button onClick={(e) => handleClick(e)}>8</button>
        <button onClick={(e) => handleClick(e)}>9</button>
        <button className="operator" onClick={(e) => handleClick(e)}>
          /
        </button>

        <button onClick={(e) => handleClick(e)}>4</button>
        <button onClick={(e) => handleClick(e)}>5</button>
        <button onClick={(e) => handleClick(e)}>6</button>
        <button className="operator" onClick={(e) => handleClick(e)}>
          *
        </button>

        <button onClick={(e) => handleClick(e)}>1</button>
        <button onClick={(e) => handleClick(e)}>2</button>
        <button onClick={(e) => handleClick(e)}>3</button>
        <button className="operator" onClick={(e) => handleClick(e)}>
          -
        </button>

        <button onClick={(e) => handleClick(e)}>0</button>
        <button onClick={(e) => handleClick(e)}>AC</button>
        <button className="operator" onClick={(e) => handleClick(e)}>
          =
        </button>
        <button className="operator" onClick={(e) => handleClick(e)}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;
