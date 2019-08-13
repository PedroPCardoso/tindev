const express = require('express');

const routes =  express.Router();

routes.get('/', (req, res) => {
    req.query.name;
    return res.json({
        message: `Ola ${req.query.name}`
    });
});

routes.post('/devs',(req,res)=>{
    console.log(req.body);
    return res.json({ok:true});
});


module.exports= routes;