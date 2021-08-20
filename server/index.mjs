import serve from "koa-static";
import Koa from "koa";
import sslify from "koa-sslify";
import path from "path";
import logger from "../utils/logger.mjs";

const staticSiteDirectory = path.join(process.cwd(), 'public');
const app = new Koa();

const serverOptions = {
  public: staticSiteDirectory,
  port: process.env.PORT || 3000,
};

const sslMiddleware = sslify.default;
const sslMiddlewareResolver = sslify.xForwardedProtoResolver;

app.use(sslMiddleware({ resolver: sslMiddlewareResolver }));
app.use(serve(staticSiteDirectory));
logger.info(`Serving from directory ${staticSiteDirectory}`);

// error handler

app.on('error', function(err) {
  logger.error('sent error %s to the cloud', err.message);
  logger.error(err);
});

app.listen(serverOptions.port);
logger.success(`Running at http://localhost:${serverOptions.port}`);
