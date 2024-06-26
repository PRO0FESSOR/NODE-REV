const http = require('http');
const fs = require('fs');

const index = fs.readFileSync('index.html',"utf8")
const data = JSON.parse(fs.readFileSync('data.json',"utf8"));

const products = data.products;

const server = http.createServer((req,res)=>{
    console.log("server started");

    if(req.url.startsWith('/product')){
       const id = req.url.split('/')[2];
       const product = products.find(p=>p.id==(+id));
       res.setHeader('Content-Type', 'text/html');
          let modifiedIndex = index.replace('**title**', product.title)
          .replace('**url**', product.thumbnail)
          .replace('**price**', product.price)
          .replace('**rating**', product.rating)
          res.end(modifiedIndex);
          return;

    }

    switch (req.url) {
        case '/':
            res.setHeader('Content-Type','text/html')
            res.end(index);
            break;
        case '/data':
            res.setHeader('Content-Type','application/json')
            res.end(data);
            break;
    
        default:
            res.writeHead(404);
            res.end();
            break;
    }
   
})

server.listen(8080);