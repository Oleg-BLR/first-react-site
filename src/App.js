import React from 'react';
import './styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button01 from './components/Button01/Button01.js';


// Custom Buttons

const Button_02 = ({ children }) => {
  return <button className="button_02">{children}</button>;
};

const Button_03 = ({ children }) => {
  return <button className="button_03">{children}</button>;
};

function App() {
  return (
    <>
      <h1>Hello me</h1>
      <Button01>Button01</Button01>
      <Button_02>Button_02</Button_02>
      <Button_03>Button_03</Button_03>
    </>
  );
}

export default App;
