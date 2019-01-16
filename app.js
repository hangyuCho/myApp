var express = require('express')
var app = express()

const request = require('request');
const url = 'https://www.naver.com';

app.get('/',function(req,res){
    //res.send('hello world!');

    request({
        uri: url
        ,method: 'GET'
        ,headers: {
            'Accept-Charset':'utf-8'
        }

    },function(err,res,body){
        console.log(body);
        res.send(body);
    });
});
app.listen(3000,function(){
    console.log('im 3000 port!!!')
});