import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Custom Buttons
const Button_01 = ({ children }) => {
  return <button className="button_01">{children}</button>;
};

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
      <Button_01>Button_01</Button_01>
      <Button_02>Button_02</Button_02>
      <Button_03>Button_03</Button_03>
    </>
  );
}

export default App;
