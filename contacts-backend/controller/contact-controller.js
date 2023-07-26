//used to get all contacts
// route GET /api/contacts
// access public as of now
const getAllContact = (req,res) =>{
    res.status(200).json({message:"Get all contacts"});
};

//create new contacts
// route POST /api/contacts
// access public as of now
const createContact = (req,res) =>{
    console.log("The request body is :",req.body);
    
    //error management if we do not get some data or info

    const {name,email,phone} = req.body;

    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are required");
    }

    res.status(201).json({message:"Create contacts"});
};



//get contacts based on id
// route get /api/contacts
// access public as of now
const getContact = (req,res) =>{
    res.status(200).json({message:`Get contact for ${req.params.id}`});
};


//update contact
// route POST /api/contacts
// access public as of now
const updateContact = (req,res) =>{
    res.status(200).json({message:`Update contact for ${req.params.id}`});
};


//delete contacts
// route POST /api/contacts
// access public as of now
const deleteContact = (req,res) =>{
    res.status(200).json({message:`Delete contact for ${req.params.id}`});
};

module.exports = { getAllContact,createContact,getContact,updateContact,deleteContact }