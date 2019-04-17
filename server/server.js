const express=require('express');
const app=express();
const port=4004;

app.listen(port)

app.get('/',(req, res)=>{
    res.send('hello maritxen')
})

//error?console.log(error):console.log(ever)