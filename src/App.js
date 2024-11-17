import React, { useState } from "react";
import './styles.css';
function App() {
  return <CustomProgram />;
}

const half = (number) => number / 2;
const double = (number) => number * 2;
const increment = (number) => number + 1;
const decrement = (number) => number - 1;

const CustomProgram = () => {
  const [initialValue, setInitialValue] = useState("");  
  const [program, setProgram] = useState([]);  
  const [result, setResult] = useState(null);  
  const [errorMessage, setErrorMessage] = useState("");  


  const handleInitialValueChange = (e) => {
    setInitialValue(e.target.value);
    setErrorMessage(""); 
  };

  
  const addToProgram = (operation) => {
    setProgram([...program, operation]);
  };


  const runProgram = () => {
    if (!initialValue) {
      setErrorMessage("Lütfen bir başlangıç değeri girin.");
      return;
    }

    let currentValue = parseFloat(initialValue);
    if (isNaN(currentValue)) {
      setErrorMessage("Geçersiz bir başlangıç değeri girdiniz.");
      return;
    }

 
    program.forEach((operation) => {
      currentValue = operation(currentValue);
    });

    setResult(currentValue);
    setInitialValue("");  
    setProgram([]);  
  };

  return (
    <div>
      <h1>Hesaplama Programı</h1>

      <div>
        <input
          type="number"
          value={initialValue}
          onChange={handleInitialValueChange}
          placeholder="Başlangıç Değeri"
          style={inputStyle}
        />
      </div>

      
      {errorMessage && <p style={errorMessageStyle}>{errorMessage}</p>}

      <div>
        <button onClick={() => addToProgram(half)} style={buttonStyle}>
          Yarım
        </button>
        <button onClick={() => addToProgram(double)} style={buttonStyle}>
          İki Katı
        </button>
        <button onClick={() => addToProgram(increment)} style={buttonStyle}>
          Arttır
        </button>
        <button onClick={() => addToProgram(decrement)} style={buttonStyle}>
          Azalt
        </button>
      </div>

      <div>
        <h3>Hesaplama Programı</h3>
        <ul>
          {program.map((operation, index) => (
            <li key={index}>
              {operation.name}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <button onClick={runProgram} style={submitButtonStyle}>
          Programı Çalıştır
        </button>
      </div>

      {result !== null && (
        <div>
          <h3>Sonuç: {result}</h3>
        </div>
      )}
    </div>
  );
};


const inputStyle = {
  padding: "10px",
  margin: "5px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  padding: "10px",
  margin: "5px",
  backgroundColor: "#cc0066",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const submitButtonStyle = {
  padding: "10px",
  backgroundColor: "#cc0066",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const errorMessageStyle = {
  color: "red",
 
};

export default App;
