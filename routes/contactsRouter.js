const express = require("express");
const router = express.Router();
const db = require('../db/db.js');

const {
 getContacts,
 createNewContact
} = require("./contactsModel.js");


// Get route handler for contact by ID
// && allContacts if no id is provided
router.get("/", async function (req, res) {
    const contacts = await getContacts();
    res.json({ success: true, payload: contacts });
});

// Create Contacts
router.post("/", async function (req, res) {
    const data = req.body;
    const newContact = await createNewContact(data);
    res.json({ success: true, payload: newContact})
});


module.exports = router;