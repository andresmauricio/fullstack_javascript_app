const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jsvascriptdb', {
    useNewUrlParser: true 
})
    .then(db => console.log('Database is connected'))
    .catch(error => console.log('This is error:', error))
  