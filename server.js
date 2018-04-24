const express = require('express');
const bodyParser = require('body-parser');
const os = require('os');
const app = express();
const path = require('path');
const parser = require ('ua-parser-js');

app.set('trust proxy',true);

app.get('/',function(request,response){
    
    let address = request.ip;
    let os = parser(request.headers['user-agent']);
    let software = os.ua;
    let userOS = software.match(/\(([^)]+)\)/);
    let lenguage = request.headers["accept-language"];
    let lenguageArr = lenguage.split(",");
    let len = lenguageArr[0];
    let obj = {"address":address,"software":userOS[1],"lenguage":len};
    response.json(obj);
})

app.listen(3000,function(){
    console.log('server working!');
})