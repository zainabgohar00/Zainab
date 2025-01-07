const http = require('http')
const server = http.createServer((req, res) => {
    console.log(`Processing the first HTTP request and shutting down the server immediately`);

    // console.log(req.url, req.method, req.headers);
    process.exit();
})
const PORT = 3000

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);

})