const express = require('express');

const app = express();

app.use(express.json());

app.use((req,res, next) =>{
console.log(req.body);
next();
})

app.post('/api/user', (req,res) =>{
 res.status(200).json({
    status:"success",
    message: "got the post data"
 })
})

app.use((req,res) =>{
    res.status(404).json(
        {
            message : "This is NodeJS",
            status : "400"
        }
    );
})

const port = 7000;
const hostname = 'localhost';

app.listen(port, hostname, ()=>{
  console.log(`Server is up and running on http://${hostname}:${port}`);
});
