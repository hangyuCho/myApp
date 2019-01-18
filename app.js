var express = require('express')
var app = express()

const request = require('request');
const url = 'https://www.naver.com';

app.get('/hello',function(req,res){
    res.send('hello world!');

});
app.listen(3000,function(){
    console.log('im 3000 port!!!')
});