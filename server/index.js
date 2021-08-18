
const express = require("express");
const app = express();

const mysql = require("mysql2");
const cors = require("cors");

const port = 3001;//
app.listen(port,() => {
    console.log('listening on port ', port)
});

app.use(cors());
app.use(express.json())


const db = mysql.createConnection({
    user: 'root',
    password: 'root',
    database: 'react_sql',
    //host: 'localhost',
    host: '67.85.230.175:3306'
});
console.log('after db - has ran')
//===============================================================
app.post("/create", (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const salary = req.body.salary;
  
    db.query(
      "INSERT INTO employees (name, age, country, position, salary) VALUES (?,?,?,?,?)",
      [name, age, country, position, salary],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  });

//===============================================================




/*app.post('/create', (req, res) => {
    console.log('in post /create')
    const name = req.body.name
    const age = req.body.age
    const country = req.country
    const position = req.body.position
    const salary = req.body.salary

    const sql = "INSERT INTO employees (name, age, country, position, salary) VALUES ('Ron' , 78, 'USA', 'CEO', 100000)";
    console.log(sql)
    db.query(sql, (err, result) => {
       if(err)
       {
           console.log(err)
       }
       else
       {
           console.log(result)
           res.send(result)
       }

    });
});*/


     //"INSERT INTO employees (name, age, country, position, salary) VALUES (?,?,?,?,?)"
    
     //[name,age,country,position,salary],

     /*(err, result) => {
        if(err)
        {
            console.log(console.log(err) )    
        }
        else
        {
            res.send('Values Inserted')
        }
      });  

    }); */