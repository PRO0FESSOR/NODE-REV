// const express = require('express');
// const server = express();

// server.get('/',(req,res)=>{
//     // res.send('hello');
//     // res.sendFile('\Users\Siddharth\Desktop\NODE\Chapter3\index.html');
//     // res.sendStatus(501)
//     res.sendFile('\Users\Siddharth\Desktop\NODE\Chapter3/index.html');
// })

// server.listen(8080,()=>{
//     console.log("server started");x
// });


const express = require('express');
const path = require('path');
const fs = require('fs');
const { hostname } = require('os');
const data = JSON.parse(fs.readFileSync('data.json',"utf8"));
const server = express();

//middlewares 

// server.use((req,res,next)=>{
//     console.log(req.method,new Date());
//     next();
// })

//auth middleware example 

const auth = (req,res,next)=>{
    if(req.body.pass=='1234'){
        next();
    }
    else{
        res.sendStatus(401);
    }
}

//application level middle ware 
// server.use(auth);

//built in middleware

server.use(express.json());
// server.use(express.urlencoded());
// server.use(express.static('public'));


//endpoints

server.get('/products/:id',(req,res)=>{
    console.log(req.params)
    res.json({type:'GET'});
})
server.get('/',(req,res)=>{
    res.json({type:'GET'});
})
server.post('/',auth,(req,res)=>{
    res.json({type:'POST'});
})
server.put('/',(req,res)=>{
    res.json({type:'PUT'});
})
server.delete('/',(req,res)=>{
    res.json({type:'DELETE'});
})
server.patch('/',(req,res)=>{
    res.json({type:'PATCH'});
})

server.get('/', (req, res) => {
    
    // ONE OF THE WAY TO USE EXACT PATH 
    // res.sendFile('C:\\Users\\Siddharth\\Desktop\\NODE\\Chapter3\\index.html');

    // BEST WAY OF USING PATHS

    // Generate absolute path to your HTML file
    // const filePath = path.join(__dirname, 'index.html');
    // console.log(filePath);
    // res.sendFile(filePath);

    //send json 
    res.json(data);
    
});

server.listen(8080, () => {
    console.log("server started");
});