// import express from 'express';
// const app = express();

// app.get('/', function(req, res) { 
//     res.send('<ul><li><a href="/">Home</a></li><li><a href="/aboutus">Aboutus</a></li></ul>' + "<h1>This is home page</h1>");
// });

// app.get("/aboutus", function(req, res){ 
//    res.send('<ul><li><a href="/">Home</a></li><li><a href="/aboutus">Aboutus</a></li></ul>' + "<h1>This is about us page </h1>");
// });


// app.listen(3000, () =>
//   console.log('Server running at http://localhost:3000'));


// import express from 'express';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const app = express();

// const filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(filename);

// app.use(express.static('public'));

// app.get("/", function(req, res) {
//     res.send('<ul><li><a href="/">home </a></li><li><a href="/aboutus">aboutus </a></li></ul>' + "<h1>This is home page</h1>");
// });

// app.get("/aboutus", function(req, res) {
//     res.send('<ul><li><a href="/">home </a></li><li><a href="/aboutus">aboutus </a></li></ul>' + "<h1>This is aboutus page</h1>");
// });

// app.get("/services",function(req,res){
//   res.sendFile(path.join(__dirname,"/public/services.html"));
// });

// app.listen(3000, () =>
// console.log('Server running at http://localhost:3000'));

import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';

const app = express();


const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);
app.use(express.urlencoded({exended:true}));
app.use(express.static('public'));

const menu= '<ul><li><a href="/">Home </a></li><li><a href="/aboutus">Aboutus </a></li><li><a href="/services">Services </a></li></ul>';

app.get("/", function(req,res){
    res.send(menu + "<h1>This is home page</h1>");
});

app.get("/aboutus", function(req,res){
    res.send(menu + "<h1>This is aboutus page</h1>");
});

app.get("/services", function(req,res){
    res.sendFile(path.join(__dirname,'public','services.html'));
});

app.get("/getinput_submit", function(req,res){
    res.sendFile(path.join(__dirname,'/public/input1.html'));
});

app.get("/getinput_submit", function(req,res){
    const name= req.query['name'];
    const date_of_birth= req.query['dob'];
    res.send("name:-"+name+"<br>date of birth"+date_of_birth);
});

app.get("/post_input", function(req,res){
    res.sendFile(path.join(__dirname,'/public/post_input.html'));
});

app.get("/post_submit", function(req,res){
    const email= req.body.email;
    const pass= req.query.pass;
    res.send("email:-"+email+"<br>pass"+pass);
});

app.listen(4000, function(){
    console.log("Server running on http://localhost:4000");
});