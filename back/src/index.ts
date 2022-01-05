import dotenv from "dotenv";
import expressApp from "./express";
import { asyncForEach } from "./helpers";
import mongooseApp from "./mongoose";
import httpServer from "./server";
import socketApp from "./socket";

dotenv.config();

(() => asyncForEach([
  mongooseApp,
  expressApp,
  httpServer,
  socketApp,
], s => s.start()))();
