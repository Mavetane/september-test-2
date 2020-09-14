const express = require('express');
const customersModel = require('../models/customers');


const companyNames = [
  { id: '1', name: 'Coca Cola', email: 'info@cocacola.co.za', address: '25 Marshall Street 2nd floor Newtown', website: 'www.cocacola.co.za' },
  { id: '2', name: 'Westrand Poultry', email: 'info@westrand.com', address: 'cnr comissioner and jeppe street Johannesburg', website: 'www.westrandpoultry.com' },
  { id: '3', name: 'The Coding Ground', email: 'info@thecodingground.com', address: 'Riversands Incubation hub training room 15 Riversands', website: 'www.thecodingground.co.za' },
  { id: '4', name: 'Pizza hut', email: 'pizzahut@gmail.com', address: '36 star street Marshall Town', website: 'www.pizzahut.com' },
  { id: '5', name: 'The Canvas', email: 'info@thecanvas.com', address: 'block 2 Riversands Incubation hub Riversands', website: 'www.thecanvas.com' },
  { id: '6', name: 'The Yard', email: 'theyard@gmail.com', address: 'block 3 Riversands Incubation hub Riversands', website: 'www.theyard.io' },
  { id: '7', name: 'Incredebile Connexions', email: 'info@incredible.com', address: 'shop 13 Fourways crossing Fourways', website: 'www.incredibleconnexion.com' },
]
const Companies = (server) => {

  server.post('/customers', async (req, res) => {
    const { name, surname, mobileNo, email, question } = req.body
    try {
      const customer = await customersModel({ name, surname, mobileNo, email, question }).save()
      console.log('customer', customer)
      res.send(customer)
    } catch (e) {
      console.log(e)
    }
  })
  server.get('/companies', async (req, res) => {
    try {
      const listOfCompanies = await companyNames
      console.log('listOfCompanies', listOfCompanies)
      res.send(listOfCompanies)
    } catch (e) {
      console.log(e)
    }

  })
}

module.exports = { Companies }