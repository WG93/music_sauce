import { EventEmitter } from "../classes";

class Game extends EventEmitter {
  private static readonly games: Record<string, Game> = {}

  public static getGame = (id: string) => {
    if (!(id in Game.games)) {
      return null;
    }
    return Game.games[id];
  } 

  public start = () => {
    
  }
}

export default Game;
