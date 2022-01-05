import { Injectable } from "@decorators/di";
import { Args, Controller, Event, Socket } from "@decorators/socket";
import { Socket as SocketType } from "socket.io";

import { Engine } from "../../classes";

@Injectable()
@Controller("/")
class SocketController {
  @Event("join")
  onJoin(@Socket() socket: SocketType, @Args() gameId: string) {
    const game = Engine.instance.getGame(gameId);

    if (game) {
      socket.join(gameId);
      socket.emit("joined", gameId);
      game.join(socket.id);
    }
  }

  @Event("message")
  onMessage(@Socket() socket: SocketType, @Args() message: string) {
    socket.rooms.forEach(room =>
      socket.to(room).emit("message", { author: socket.id, message })
    );
  }
}

export default SocketController;
