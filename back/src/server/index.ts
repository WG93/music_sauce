import { createServer, Server } from "http";
import { Service } from "../classes";
import expressApp from "../express";

class HttpServer extends Service<Server> {
  public start = () => {
    this.app = createServer(expressApp.getApp());
    this.app.listen(process.env.PORT, () => console.log(`Listening to port ${process.env.PORT}`));
    
    return this.app;
  }
}

export default new HttpServer();
