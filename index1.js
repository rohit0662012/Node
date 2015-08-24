let http = require('http')

http.createServer((req, res) => {
    console.log(`Request received at: ${req.url}`)
    //res.end('hello world\n')
let downstreamResponse = req.pipe(request(options))
process.stdout.write(JSON.stringify(downstreamResponse.headers))
downstreamResponse.pipe(process.stdout)
downstreamResponse.pipe(res)
for (let header in req.headers) {
    res.setHeader(header, req.headers[header])
}
req.pipe(res)
}).listen(8000)