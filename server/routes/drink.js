const express = require('express')
const router = express.Router()
const axios = require('axios')
const Drink = require('../data/Drink')

router.use((req, res, next) => {
  console.log('Request: ' + req.url)
  next()
})

router.get('/drinkname', (req, res) => {
  const searchText = req.query.text
  axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`)
    .then((response) => {
      let drinks = response.data.drinks.map(drink => new Drink(drink))
      res.send(drinks)
    })
    .catch((error) => {
      console.log(error)
    })
})

router.get('/drinkid', (req, res) => {
  const searchText = req.query.text
  axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${searchText}`)
    .then((response) => {
      let drink = new Drink(response.data.drinks[0])
      res.send(drink)
    })
    .catch((error) => {
      console.log(error)
    })
})

module.exports = router