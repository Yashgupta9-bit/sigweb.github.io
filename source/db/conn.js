const mongoose = require("mongoose");

// creating a database
mongoose.connect("mongodb://localhost:27017/NEW", {
    userCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> {
    console.log("connecttion successful");
}).catch((error) => {
    console.log(error);
})