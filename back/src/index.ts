import dotenv from "dotenv";
import expressApp from "./express";
import httpServer from "./server";
import socketApp from "./socket";

dotenv.config();

const start = async () => {
  expressApp.start();
  httpServer.start();
  socketApp.start();
};

start();
