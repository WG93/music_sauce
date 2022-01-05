import { Container } from "@decorators/di";
import { attachControllers, IO_MIDDLEWARE, ServerMiddleware } from "@decorators/socket";
import SIO from "socket.io";

import { Service } from "../classes";
// import { passport, session } from "../middlewares";
import httpServer from "../server";
import * as controllers from "./controllers";

const wrap = (middleware: Function) => (socket: SIO.Socket, next: Function) => middleware(socket.request, {}, next);

class SocketApp extends Service<SIO.Server> implements ServerMiddleware {
  public use = (
    io: SIO.Server | SIO.Namespace,
    socket: SIO.Socket,
    next: Function
  ) => {
    next();
    // if ("user" in socket.request) {
    //   next();
    // } else {
    //   next(Error("User not authentified"));
    // }
  }

  public start = () => {
    this.app = new SIO.Server(httpServer.getApp(), { cors: {} });
    // this.app.use(wrap(session));
    // this.app.use(wrap(passport.initialize()));

    attachControllers(this.app, Object.values(controllers));
    return this.app;
  }
}

Container.provide([
  { provide: IO_MIDDLEWARE, useClass: SocketApp },
]);

export default new SocketApp();
