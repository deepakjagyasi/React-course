const router = require('express').Router();
let Customer = require('../models/customer.model');

router.get('/', async (req, res) => {
    try{
        const customers = await Customer.find();
        res.json(customers)
    } catch(err){
        res.send(err)
    }     
});

router.get('/:id', async (req, res) => {
    try{
        const customer = await Customer.findById(req.params.id);
        res.json(customer)
    } catch(err){
        res.send(err)
    }     
});

router.patch('/:id', async (req, res) => {
    try{
        const customer = await Customer.findById(req.params.id);
        customer.first_name = req.body.first_name;
        customer.last_name = req.body.last_name;
        customer.gender = req.body.gender;
        const c1 = await customer.save();
        res.json(c1)
    } catch(err){
        res.send(err)
    }     
});

router.delete('/:id', async (req, res) => {
    try{
        const customer = await Customer.findByIdAndDelete(req.params.id);
        //const c1 = await customer.delete();
        res.json(c1)
    } catch(err){
        res.send(err)
    }     
});

router.post('/', async (req, res) => {
    const newCustomer = new Customer({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        gender : req.body.gender
    });
    try{
        const c1 = newCustomer.save();
        res.send(c1);
    }catch(err){
        res.send('Error')   
    }
});

module.exports = router;