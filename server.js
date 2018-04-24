const express = require('express');
const bodyParser = require('body-parser');
const os = require('os');
const app = express();
const path = require('path');

app.set('trust proxy',true);

app.get('/',function(request,response){
    let address = request.ip;
    let userType = os.type;
    let userPlatform = os.platform;
    let userRelease = os.release;
    let userArch = os.arch;
    let lenguage = request.headers["accept-language"];
    let lenguageArr = lenguage.split(",");
    let len = lenguageArr[0];
    let obj = {"address":address,"software": userType +  " " + userRelease + ";" + " " + userPlatform + ", " + userArch,"lenguage":len};
    response.json(obj);
})

app.listen(3000,function(){
    console.log('server working!');
})