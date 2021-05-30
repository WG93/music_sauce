import { Container } from "@decorators/di";
import { attachControllers, IO_MIDDLEWARE, ServerMiddleware } from "@decorators/socket";
import { Namespace, Server, Socket } from "socket.io";

import { Service } from "../classes";
import httpServer from "../server";
import * as controllers from "./controllers";

class SocketApp extends Service<Server> implements ServerMiddleware {
  public use = (
    io: Server | Namespace,
    socket: Socket,
    next: Function
  ) => {
    next();
  }

  public start = () => {
    this.app = new Server(httpServer.getApp(), { cors: {} });
    
    attachControllers(this.app, Object.values(controllers));
    return this.app;
  }
}

Container.provide([
  { provide: IO_MIDDLEWARE, useClass: SocketApp },
]);

export default new SocketApp();
