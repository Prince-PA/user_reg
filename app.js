import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';

const app = express();

const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);


app.use(express.urlencoded({ extended: true }));

app.get("/user_reg", function(req,res){
    res.sendFile(path.join(__dirname, 'public', 'user_reg.html'));
});


app.post("/user_reg_submit", function(req,res){
    const first_name = req.body.first_name;
    const middle_name = req.body.middle_name;
    const last_name = req.body.last_name;
    const gender = req.body.gender;
    const dob = req.body.dob;
    const email = req.body.email;
    const password = req.body.password;
    const security_question = req.body.security_question;
    const security_answer = req.body.security_answer;
    const hobbies = req.body.hobbies;

    res.send(
        "<h1>Registration Details</h1>" +
        "<p><b>First Name:</b> " + first_name + "</p>" +
        "<p><b>Middle Name:</b> " + middle_name + "</p>" +
        "<p><b>Last Name:</b> " + last_name + "</p>" +
        "<p><b>Gender:</b> " + gender + "</p>" +
        "<p><b>Date of Birth:</b> " + dob + "</p>" +
        "<p><b>Email:</b> " + email + "</p>" +
        "<p><b>Password:</b> " + password + "</p>" +
        "<p><b>Security Question:</b> " + security_question + "</p>" +
        "<p><b>Security Answer:</b> " + security_answer + "</p>" +
        "<p><b>Hobbies:</b> " + hobbies + "</p>" +
        '<a href="/user_reg">Back to form</a>'
    );
});

app.listen(4000, function(){
    console.log("Server running on http://localhost:4000");
});