import handler from "serve-handler";
import http from "http";
import path from "path";
import logger from "../utils/logger.mjs";

const staticSiteDirectory = path.join(process.cwd(), 'public');

const serverOptions = {
  public: staticSiteDirectory,
  port: process.env.PORT || 3000,
  cleanUrls: true,
  directoryListing: false,
  trailingSlash: false,
  // renderSingle   If a directory only contains one file, render it
  // symlinks   Resolve symlinks instead of rendering a 404 error
  etag: true,
};

const server = http.createServer((request, response) => handler(request, response, serverOptions));

server.listen(serverOptions.port, () => {
  logger.success(`Running at http://localhost:${serverOptions.port}`);
  logger.info(`Serving from directory ${staticSiteDirectory}`);
});
