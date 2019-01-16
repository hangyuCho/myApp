//https://recommend.finance.naver.com/home/GetChartData01?brkCd=0&pfcd=0&ernTyp=E&cmpCd=000020&indt=2018-01-01\
//https://finance.naver.com/item/main.nhn?code=000010
var express = require('express')
var JSSoup = require('jssoup').default;
var app = express()

const request = require('request');
const url = 'https://www.naver.com';
const allDataJson = 'https://recommend.finance.naver.com/home/GetChartData01?brkCd=0&pfcd=0&ernTyp=E&cmpCd=#cmpCd&indt=#indt';

app.get('/',function(req,res){
    res.send('hello world!');
    var otherPage;
    request({
        uri:url,
        method:'GET',
        headers:{
            'Accept-Charset':'utf-8'
        }
    },function(err,res,body){
        //console.log(body);
        var soup = new JSSoup(body);
        
        console.log(soup.find('div').text);
    });
});
app.get('/getAll',function(){
    var cmpCd;
    var indt = new Date().toJSON().split('T')[0];
    let urlArr = [];
    for (let i = 0; i < 999999; i++) {
        cmpCd = ("00000" + i.toString()).slice(-6);
        let jsonUrl = allDataJson.replace('#cmpCd',cmpCd).replace('#indt',indt);
        request({
            uri:jsonUrl,
            method:'GET',
            headers:{
                'Accept-Charset':'utf-8'
            }
        },function(err,res,body){
            var incJson = JSON.parse(body);
            console.log(incJson.chartTitle);
        });
    }
    async.each(urlArr,function(apiRequest, cb){

    });
    

});
app.listen(3000,function(){
    console.log('Docking 3000 Port');
});