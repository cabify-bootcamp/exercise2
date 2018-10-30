require('dotenv').config();

const express = require("express");
const axios = require("axios");
const router = express.Router();
const hostname =  process.env.MSG_SERV || 'localhost'
const port = process.env.PORT || '3000'
const v = require('./validators')

const service = axios.create({
  baseURL: `http://${hostname}:${port}`
});

router.post('/', (req, res, next) => {

  const validator = v.isValid(req.body)
  const {destination, body} = req.body
  
  if (validator.status !== 'valid') {
    console.log('entra')
    res.send(res.status(500).send('Error: ' + validator.comment))
  }
  
  service.post('/message', {destination, body})
  .then( resp => {
    res.send(`${resp.data}`)
  })
  .catch(error => 
    res.status(500).send(`${error}`)
    );

})
  

module.exports = router;