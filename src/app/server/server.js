import {environment} from "../../environments/environment";
import {apiName} from "../app.component";

const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('mongoose');
const User = require('./models/user');

const db = mongo.connect(environment.dbURL, function (err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to ' + db, ' + ', response);
  }
});

const app = express();
app.use(bodyParser);
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({extended: true}));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

const userApiName = apiName + '/user';
app.post(userApiName + '/save', (req, res) => {
  if (req.body.mode === 'save') {
    User.save(err => {
      if (err) {
        res.send(err);
      } else {
        res.send({data: 'Record has been inserted!'});
      }
    })
  } else {
    User.findByIdAndUpdate(req.body.id, {name: req.body.name, address: req.body.address}, err => {
      if (err) {
        res.send(err);
      } else {
        res.send({data: 'Record has been updated!'});
      }
    })
  }
})

app.post(userApiName + '/delete', (req, res) => {
  User.remove({_id: req.body.id}, err => {
    if (err) {
      res.send(err);
    } else {
      res.send({data: 'Record has been deleted!'});
    }
  })
})

app.get(userApiName + '/find', (req, res) => {
  User.find({}, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  })
})

app.listen(8080, function () {
  console.log('my-psy app listening on port 8080!');
})
