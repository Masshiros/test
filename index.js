const http = require("http");
const hostname = "localhost";
const port = 2607;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  switch (req.url) {
		case "/home" :
			res.writeHead( 200 );
			res.end( "<h1>This is Home page</h1>" );
			break ;
		case "/about" :
			res.writeHead( 200 );
			res.end( "<h1>This is About page</h1>" );
			break ;
		default :
      res.writeHead(200)
      res.end("<h1>This is Default Page</h1>")
			break ;
	}
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
