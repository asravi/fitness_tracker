// Create a server instance 
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

//Server port
const PORT = process.env.PORT || 3000;
const app = express();


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true, useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

//use logger
app.use(logger("dev"));

//parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//use static files
app.use(express.static("public"));

//use routes
require('./routes/apiroutes')(app)
require('./routes/htmlroutes')(app)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}..`);
})