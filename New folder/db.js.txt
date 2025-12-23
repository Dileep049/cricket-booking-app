const mongoose = require("mongoose");

mongoose .connect (process.env.MONGO_URL,{
  use New Url Parser : true,
  use Unified Topology: true
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));
