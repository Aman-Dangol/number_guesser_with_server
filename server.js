const NumGen = require("./randomNumGen");
const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");
const { error } = require("console");
const { findSourceMap } = require("module");
let numGenerator = new NumGen();

const server = http.createServer((req, res) => {
  let parsedUrl = url.parse(req.url);
  if (parsedUrl.path == "/") {
    responder("text/html","./index.html",res)
    
  } else if (parsedUrl.path == "/client.js") {
   responder("application/javascript","./client.js",res);
  }
  else if(parsedUrl.path =="/getNum"){
    let number = numGenerator.generateNumber();
    res.setHeader("content-type","application/json")
    res.end(JSON.stringify(number));
  }
});


function responder(ch,filepath,res){
  res.statusCode = 200;
  res.setHeader("content-type",ch);
  fs.readFile(filepath,(err,data)=>{
    if (err) {
      res.statusCode = 404;
      return;
    }
    res.end(data);
  })

}
server.listen(3000);
