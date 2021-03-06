//import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState(0);

  const butHandler = (() => {
     //console.log(name,age,country,position,salary)
     axios.post('http://localhost:3001/create', {
        name: name,
        age: age,
        country: country,
        position: position,
        salary: salary,
     }).then(() => {
        console.log('success')
     })
   
   });

  //console.log(name , age , country , position , salary)

return (
   <div className="App">
    <div className="inputs">
      <label>Name: </label>
      <input type="text" onChange={(event) => { 
         setName(event.target.value);}} />
      <label>Age: </label> 
      <input type="number" onChange={(event) => { 
         setAge(event.target.value);}} />          
      <label>Country: </label>
      <input type="text" onChange={(event) => { 
         setCountry(event.target.value);}} />
      <label>Position: </label>
      <input type="text" onChange={(event) => { 
         setPosition(event.target.value);}} />
      <label>Salary: </label>
      <input type="number" onChange={(event) => { 
         setSalary(event.target.value);}} />
      <button onClick={butHandler}>Add Employee</button>
    </div> 
   </div>
         ) 
}

export default App;
