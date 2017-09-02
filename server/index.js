const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app =express();
app.set('port', (process.env.PORT || 4000));
mongoose.connect('mongodb://localhost/store')

mongoose.Promise = global.Promise;

app.use(bodyParser.json());


app.use('/api', require('./routes/api'));
//init app
//build part of the react app
//uncoment after npm build to serve react app
/*app.use('/', express.static(path.join(__dirname, '../build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});
*/
//err
app.use(function(err, req, res, next){
  //console.log(err);
  res.status(422).send({error: err.message})
});

//port
app.listen(app.get('port'), function () {
    console.log('App listening on port ' + app.get('port'));
});
