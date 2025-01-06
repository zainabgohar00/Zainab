const { createServer } = require("http");
const hostname = '127.0.0.1';
const port = 3000;
const fs = require("fs")

const home = fs.readFileSync("index.html")
const about = fs.readFileSync("about.html")
const blog = fs.readFileSync("blog.html")

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  if (req.url == "/"){
    res.end(home);
  }
 else if(req.url == "/about"){
    res.end(about);
 }
 else if (req.url == "/blog"){
    res.end(blog);
 }
 else{
    res.statusCode=404
    res.setHeader("Content-type", "text/plain")
    res.end('Page not found')
 }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
