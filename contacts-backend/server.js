const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

// app.get('/api/contacts', (req,res) =>{
//     res.status(200).json({message:"Get all contacts"});
// });

//getting the above required info from another file

//the below line is used to parse the data that is being sent
app.use(express.json());
app.use("/api/contacts", require("./routes/contact-routes"));


app.listen(port, () =>{
    console.log(`server running on port ${port}`)
});