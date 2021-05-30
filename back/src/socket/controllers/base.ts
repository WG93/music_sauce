import { Injectable } from "@decorators/di";
import { Args, Controller, Event, Socket } from "@decorators/socket";
import { Socket as SocketType } from "socket.io";

import Game from "../../game";

@Injectable()
@Controller("/")
class SocketController {
  @Event("join")
  onJoin(@Socket() socket: SocketType, @Args() roomId: string) {
    if (Game.getGame(roomId))
    socket.join(roomId);
  }

  @Event("message")
  onMessage(@Socket() socket: SocketType, @Args() message: string) {
    socket.rooms.forEach(room => socket.to(room).emit("message", message));
  }
}

export default SocketController;
