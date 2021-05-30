import { Injectable } from "@decorators/di";
import { Args, Controller, Event } from "@decorators/socket";

@Injectable()
@Controller("/")
class ChatController {
  @Event("message")
  onMessage(@Args() message: string) {
    console.log(message);
  }
}

export default ChatController;
