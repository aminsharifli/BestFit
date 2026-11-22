import express from "express";
import { deletEvents, getEvents, getIdEvents, patchEvents, postEvents } from "../controller/eventsController.js";
import { validateEvent } from "../middleware/validateEvent.js";
import { patchValidateEvents } from "../middleware/patchValidateEvents.js";

export const eventsRouter = express.Router();

eventsRouter.get("/", getEvents)
eventsRouter.get("/:id", getIdEvents)
eventsRouter.post("/",validateEvent, postEvents)
eventsRouter.patch("/:id",patchValidateEvents, patchEvents)
eventsRouter.delete("/:id", deletEvents)