const express = require("express")
const cors = require("cors");
const app = express();
const Account = require("./Model/ContactModel ")
app.use(express.json())
require("./Config/connect")
app.use('/contacts',require("./Routes/contactRoutes"))


app.use(cors());


app.post("/api/accounts", async(req, res) => {
  const { firstName, lastName, email } = req.body;
  if (!firstName || !email) {
    return res.status(400).json({ message: "First name and email are required" });
  }

  try {
    const newAccount = new Account({ firstName, lastName, email });
    await newAccount.save();
    res.status(200).json({ message: "Account saved to MongoDB" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving account" });
  }
});
const port = 5000;
app.listen(port,(req,res) => {
    console.log(`${port } successfully`);
    
})