const mongoose = require("mongoose");
//Write missing code 
mongoose.connect('mongodb+srv://shamnah2111:qazzaq09@cluster0.vpunmhf.mongodb.net/empdb?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
