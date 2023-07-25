const express = require("express");
const router = express.Router();
const { getAllContact,createContact,getContact,updateContact,deleteContact } = require("../controller/contact-controller");

// router.route('/').get(getAllContact);

// router.route('/').post(createContact);

// router.route('/:id').get(getContact);

// router.route('/:id').put(updateContact);

// router.route('/:id').delete(deleteContact);

router.route('/').get(getAllContact).post(createContact);
router.route('/:id').get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;


