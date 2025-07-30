const accountSchema = require("../Model/ContactModel ")
const bcryptjs = require("bcryptjs")

const getcontacts = (req ,res ) => {
    res.status(200).json({message:"getc contacts successfully"})
} 

    

module.exports = {getcontacts}