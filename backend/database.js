const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
    .then(db => console.log('Database is connected'))
    .catch(error => console.log('This is error:', error))
  