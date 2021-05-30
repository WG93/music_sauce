class EventEmitter {
  private listeners: Record<string, Function[]> = {}

  emit = (event: string, ...args: any[]) => {
    if (event in this.listeners) {
      this.listeners[event].forEach(listener => listener(...args));
    }
  }

  on = (event: string, fn: Function) => {
    if (event in this.listeners) {
      this.listeners[event].push(fn);
    }
  }

  off = (event: string, fn: Function) => {
    if (event in this.listeners) {
      const index = this.listeners[event].indexOf(fn);

      if (~index) {
        this.listeners[event].splice(index, 1);
      }
    }
  }
}

export default EventEmitter;
