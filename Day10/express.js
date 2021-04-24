const express= require('express')

const app = express();

app.get('/', function(req, res){
    res.send('Hello world')
})

app.get('/users', function(req, res){
    const id = req.query.id
    res.send('Hello User '+id)
})

app.get('/users/:id', function(req, res){
    const id = req.params.id;
    res.send('Hello User '+ id)
})

app.listen(9000, function(req, res){
    console.log('Running...')
})