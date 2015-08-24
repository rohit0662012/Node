let request = require('request')
let http = require('http')
let argv = require('yargs')
    .default('host', '127.0.0.1:8000')
    .argv
let scheme = 'http://'
// Build the destinationUrl using the --host value
//let destinationUrl = scheme + argv.host
//let destinationUrl = '127.0.0.1:8000'
let q = '//'
let port = argv.port || (argv.host === '127.0.0.1' ? 8000 : 80)
let destinationUrl = argv.url || scheme + argv.host + ':' + port
http.createServer((req, res) => {
  console.log(`Proxying request to: ${destinationUrl + req.url}`)
  // Proxy code here
 
   let options = {
        headers: req.headers,
        url: `${destinationUrl}${req.url}`

    }
    console.log(`http:${q}${destinationUrl}${req.url}`);
    //request(options).pipe(res)
    //request(options).pipe(res)

    //options.method = req.method
// Notice streams are chainable:
// inpuStream -> input/outputStream -> outputStream
//req.pipe(request(options)).pipe(res)
options.method = req.method
// Notice streams are chainable:
// inpuStream -> input/outputStream -> outputStream
req.pipe(request(options)).pipe(res)

//req.pipe(res)
}).listen(8001)




