import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    console.log('register fucntion');
    window.successPayment = successPayment
    window.errorPayment = errorPayment
  })
  
  const successPayment = (value) => {
    alert(value);
  }
  
  const errorPayment = (value) => {
    alert(value);
  }
  
  const bayar = () => {
    try {
      var payoad = {
        client: "6001",
        _token: "test",
        va_number: "74001002198",
      };
      window.PayVA.postMessage(JSON.stringify(payoad));
    } catch (error) {
      console.log(error);
      alert(error)
    }
  }
  
  const back = () => {
    try {
      window.BackToHome.postMessage('back-to-home');
    } catch (error) {
      console.log(error);
      alert(error)
    }
  }

  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          ReactJS Flutter Integration
        </p>
        <button onClick={bayar}>Call Payment Method</button>
        <br/>
        <button onClick={back}>Call Back Button</button>
      </header>
    </div>
  );
}

export default App;