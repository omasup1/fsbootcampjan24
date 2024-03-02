const http = require('http');
const fs = require('fs');


const server = http.createServer((request, response) => {
    if(request.url == '/'){
        fs.readFile('./index.html', function(error, data){            
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.write(data);
            response.end();
        });

    } else if(request.url == '/contact'){
        fs.readFile('../contact.html', function(error, data){            
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.write(data);
            response.end();
        });
    } else if(request.url == '/about'){
        response.write('This is my About page');
        response.end();
    }

    //see if you can link it to actual html pages
    
});

server.listen(3000, () =>{
    console.log('Once you start listening show this message')
});