import { Controller, Get, Params, Response } from "@decorators/express";
import { Response as ResponseType } from "express";

@Controller("/rooms")
class RoomController {
  @Get("/")
  getAll(@Response() res: ResponseType) {
    return res.json([]);
  }

  @Get("/:id")
  get(@Response() res: ResponseType, @Params("id") id: string) {
    return res.json({ id });
  }
}

export default RoomController;
