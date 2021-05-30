import { attachControllers } from "@decorators/express";
import compression from "compression";
import cors from "cors";
import express, { Application } from "express";

import { Service } from "../classes";
import * as controllers from "./controllers";

class ExpressApp extends Service<Application> {
  public start = () => {
    this.app = express();
    this.app.use(compression({}));
    this.app.use(cors());
    
    attachControllers(this.app, Object.values(controllers));
    return this.app;
  }
}

export default new ExpressApp();
