class Player {
  constructor(
    public id: string,
    public loadedNextQuestion: boolean,
    public score: number = 0,
  ) {}
}

export default Player;
