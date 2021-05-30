interface IService<TInstance> {
  start(): TInstance;
  getApp(): TInstance | never;
}

abstract class Service<TInstance> implements IService<TInstance> {
  protected app?: TInstance

  public getApp() {
    if (!this.app) {
      throw Error("App not initialized yet");
    }
    return this.app;
  }
  
  public abstract start(): TInstance
}

export default Service;
