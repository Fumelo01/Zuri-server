const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const PORT=8080; 


const server = http.createServer ((request, response) => { 
   const reqUrl = url.parse(request.url).pathname;
    if(reqUrl == "/") {
      filePath = path.join (__dirname,'../server', 'home.html'); 
      fs.readFile(filePath, function(err, data) {
        if (err) throw err;
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        response.end();
      });
 
    }
    else if(reqUrl == "/about") {
      let filePath = path.join (__dirname,'../server', '/about.html' ); 
      fs.readFile(filePath, function(err, data) {
        if (err) throw err;
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        response.end();
      });
    }
    else if(reqUrl == "/contact") {
      let filePath = path.join (__dirname,'../server', '/contact.html' ); 
      fs.readFile(filePath, function(err, data) {
        if (err) throw err;
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        response.end();
      });
    }
    else if(reqUrl == "/home") {
      filePath = path.join (__dirname,'../server', 'home.html'); 
      fs.readFile(filePath, function(err, data) {
        if (err) throw err;
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        response.end();
      });
 
    }
  
  
  
  
  

  
});
const getContentType = (filePath) => {
  let extName = path.extname(filePath);
  if (extName == '.js') {
    return 'text/javascript';
  }
  if (extName == '.css') {
    return 'text/css';
  }
  if (extName == '.png') {
    return 'image/png';
  }
  if (extName == '.jpg') {
    return 'image/jpg';
  }
  if (extName == '.jpeg') {
    return 'image/jpeg';
  }
  if (extName == '.gif') {
    return 'image/gif';
  }
};





// Have the server listen on port 
server.listen(PORT, () => {
  console.log ('The server is running at port ' + PORT);
});

