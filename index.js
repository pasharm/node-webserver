
const { createServer } = require('http')

const port = 3000
const server = createServer(handleRequest)

server.listen(port, () => {
	console.log('http://localhost:' + port)
})

function handleRequest(request, response) {
	response.end('Hello World!')
}
