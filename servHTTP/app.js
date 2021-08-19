const http = require('http');

http.createServer((req, res) =>  {
	console.log("Instanciando um servidor");

    res.end("Meu primeiro servidor HTTP")
}).listen(3000, "localhost");