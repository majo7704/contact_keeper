const mongoose = require('mongoose');
const config = require('config'); //gives acces to the global variable just created
const db = config.get('mongoURI');//grabs the value of URI

const connectDB = async () => { //could be as a promise
try {
  await mongoose
    .connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
  console.log('MongoDB Connected...')
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
}

module.exports = connectDB;