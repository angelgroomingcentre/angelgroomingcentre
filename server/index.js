const handler = require('serve-handler');
const http = require('http');
const path = require("path");

const serverOptions = {
  public: path.join(process.cwd(), 'public'),
  cleanUrls: true,
  directoryListing: false,
  trailingSlash: false,
  // renderSingle   If a directory only contains one file, render it
  // symlinks   Resolve symlinks instead of rendering a 404 error
  // etag   Calculate a strong ETag response header, instead of Last-Modified
};

const server = http.createServer((request, response) => {
  // You pass two more arguments for config and middleware
  // More details here: https://github.com/vercel/serve-handler#options
  return handler(request, response, serverOptions);
})

server.listen(3000, () => {
  console.log('Running at http://localhost:3000');
  console.log("Current directory:", path.join(process.cwd(), 'public'));

















});