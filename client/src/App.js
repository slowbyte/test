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

   const but2Handler = (() => {
      //console.log(name,age,country,position,salary)
      axios.get('http://localhost:3001/columnnames').then((response) => { 

      console.log('button2Handler response is ', response)
         
         const theData = response.data;  
         let columnNames = theData.map((element) => {
            return element.COLUMN_NAME;
         });    
         alert("COLUMN NAMES = " + columnNames);
         alert("theData[2] = " + columnNames[2]);
         /*alert(response.data[2].COLUMN_NAME); //this works ok returns 'age'
         alert(response.data.length);
         //==========================================================================
         //alert(theData.length); //works
         //var objs = Array();
         const objs = theData.map((colName) => ([colName.COLUMN_NAME]));
         alert(objs);
         alert(objs[4] + " ... " + objs[1]);
         const x = [...objs];
         alert(x + " --- " + x[3]);*/
         //==========================================================================
      });                                
                 
});
      
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
      <button onClick={but2Handler}>ColumnNames</button>
    </div> 
   </div>
         ) 
}

export default App;
