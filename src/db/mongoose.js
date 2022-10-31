const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect(process.env.MONGODB_URL, {
   // these are no longer necessary to acces mongodb
   // useNewUrlParser: true,
   // useCreateIndex: true,
   // useFindAndModify: false
});
