var express = require('express');
var app = express();
const PORT = process.env.PORT;
const request = require('request');
const url = 'https://www.naver.com';

app.get('/hello',function(req,res){
    res.send('hello world!');

});
app.listen(PORT,function(){
    console.log('im '+PORT+' port!!!')
});