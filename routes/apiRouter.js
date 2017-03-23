let Router = require('express').Router;
const apiRouter = Router()
let helpers = require('../config/helpers.js')

let User = require('../db/schema.js').User
let Etsy = require('../db/schema.js').Etsy
  
  apiRouter
    .get('/users', function(req, res){
      User.find(req.query , "-password", function(err, results){
        if(err) return res.json(err) 
        res.json(results)
      })
    })

  apiRouter
    .get('/users/:_id', function(req, res){
      User.findById(req.params._id, "-password", function(err, record){
        if(err || !record ) return res.json(err) 
        res.json(record)
      })
    })
    .put('/users/:_id', function(req, res){

      User.findByIdAndUpdate(req.params._id, req.body, function(err, record){
          if (err) {
            res.status(500).send(err)
          }
          else if (!record) {
            res.status(400).send('no record found with that id')
          }
          else {
            res.json(Object.assign({},req.body,record))
          }
      })
    })

    .delete('/users/:_id', function(req, res){
      User.remove({ _id: req.params._id}, (err) => {
        if(err) return res.json(err)
        res.json({
          msg: `record ${req.params._id} successfully deleted`,
          _id: req.params._id
        })
      })  
    })

    // Routes for a Model(resource) should have this structure
  apiRouter
  //READ
  .get('/items', function(request, response) {
    Etsy.find(request.query, function(error, records) {
      if (error) {
        return response.status(400).json(error)
      }
      response.json(records)
    })
  })

  //CREATE
  .post('/items', function(request, response) {
      var newItem = new Etsy(request.body)
      newItem.save(function(error, record) {
        if (error) {
          return response.status(400).json(error)
        }
        response.json(record)
      })
    })

module.exports = apiRouter