import { attachControllers } from "@decorators/express";
import express, { Application } from "express";

import { Service } from "../classes";
import { compress, cors, passport, session } from "../middlewares";
import * as controllers from "./controllers";


class ExpressApp extends Service<Application> {
  public start = () => {
    this.app = express();
    this.app.use(cors);
    this.app.use(compress);
    // this.app.use(session);
    // this.app.use(passport.initialize());
    // this.app.use(passport.session());

    attachControllers(this.app, Object.values(controllers));
    return this.app;
  }
}

export default new ExpressApp();
