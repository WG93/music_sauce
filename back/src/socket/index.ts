import { Container } from "@decorators/di";
import { attachControllers, IO_MIDDLEWARE } from "@decorators/socket";
import { Server } from "socket.io";

import { Service } from "../classes";
import httpServer from "../server";
import * as controllers from "./controllers";

const controllerArray = Object.values(controllers);

controllerArray.forEach(controller =>
  Container.provide([
    { provide: IO_MIDDLEWARE, useClass: controller },
  ])
);

class SocketApp extends Service<Server> {
  public start = () => {
    this.app = new Server(httpServer.getApp());
    
    attachControllers(this.app, controllerArray);
    return this.app;
  }
}

export default new SocketApp();
