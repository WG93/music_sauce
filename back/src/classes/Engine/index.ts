import { EventEmitter } from "..";
import Game from "../Game";
import { Time } from "./types";

class Engine extends EventEmitter {
  public static readonly instance = new Engine();

  private currentUpdate: Promise<void[]> = Promise.resolve([]);

  private running = false;

  private time: Time = {
    startedAt: 0,
    current: 0,
    elapsed: 0,
    delta: 0,
    lastUpdate: 0,
  };

  private games: Record<string, Game> = {};

  private gameArray: Game[] = [];

  public start = () => {
    if (this.running) return;

    this.time.current = Date.now();
    this.time.lastUpdate = this.time.current;
    this.time.startedAt = this.time.current;

    this.running = true;

    this.run();
  };

  public stop = async () => {
    if (!this.running) return;

    this.running = false;

    await this.currentUpdate;
  };

  public createGame = () => {
    const game = new Game({
      maxScore: 200,
      time: 10,
    });

    const id = "test";
    this.games[id] = game;
    this.gameArray.push(game);

    game.on("delete", () => {
      this.gameArray.splice(this.gameArray.indexOf(game));
      delete this.games[id];
    });

    return game;
  };

  public getGame = (id: string) => this.games[id];

  private run = async () => {
    while (this.running) {
      this.time.current = Date.now();
      this.time.elapsed = this.time.current - this.time.startedAt;
      this.time.delta = this.time.current - this.time.lastUpdate;
      this.time.lastUpdate = this.time.current;
      this.currentUpdate = this.update();
      await this.currentUpdate;
    }
  };

  public update = () => Promise.all(this.gameArray.map(this.runGame));

  private runGame = (game: Game) => game.run(this.time);
}

export default Engine;
