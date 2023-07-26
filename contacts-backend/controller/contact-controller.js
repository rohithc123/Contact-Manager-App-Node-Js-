//usually for async we need to use try catch block, to cut short the code we will be using express asysnc handler cause it will handle all those messy stuff
const asyncHandler = require("express-async-handler");
const Contact = require("../models/contact-model")

//used to get all contacts
// route GET /api/contacts
// access public as of now
const getAllContact = asyncHandler(async (req,res) =>{
    const contacts = await Contact.find();
    res.status(200).json({contacts});
});

//create new contacts
// route POST /api/contacts
// access public as of now
const createContact = asyncHandler(async (req,res) =>{
    console.log("The request body is :",req.body);
    
    //error management if we do not get some data or info

    const {name,email,phone} = req.body;

    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are required");
    }

    const contact = await Contact.create({
        name,
        email,
        phone
    });

    res.status(201).json({contact});
});



//get contacts based on id
// route get /api/contacts
// access public as of now
const getContact = asyncHandler(async (req,res) =>{
    const contact = await Contact.findById(req.params.id);

    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }

    res.status(200).json(contact);

});


//update contact
// route POST /api/contacts
// access public as of now
const updateContact = asyncHandler(async (req,res) =>{
    res.status(200).json({message:`Update contact for ${req.params.id}`});
});


//delete contacts
// route POST /api/contacts
// access public as of now
const deleteContact = asyncHandler(async (req,res) =>{
    res.status(200).json({message:`Delete contact for ${req.params.id}`});
});

module.exports = { getAllContact,createContact,getContact,updateContact,deleteContact }