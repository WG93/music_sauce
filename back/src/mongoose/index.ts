import mongoose from "mongoose";

import { Service } from "../classes";

class MongooseApp extends Service<typeof mongoose> {
  public start = async () => {
    this.app = mongoose;
    await this.app.connect(process.env.MONGO_URI as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    return this.app;
  }
}

export default new MongooseApp();
