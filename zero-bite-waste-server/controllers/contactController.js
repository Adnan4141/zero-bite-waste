const Contact = require("../models/contact");



exports.createMessage = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    const saved = await contact.save();
    res.status(201).json({
      message:"Succesffuly received message",
      success: true,
      error: false,
      saved
   });


  } 
  catch (err) {
    res.status(400).json({ 
      message:err.message || err,
      success: false,
      error: true,
    });
  }
};


exports.getMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ date: -1 });
    res.status(200).json({
      messages,
      success: false,
      error: true,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
