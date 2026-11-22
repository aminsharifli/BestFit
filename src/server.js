import express from "express";
import { events } from "./data/events.js";
import { logger } from "./middleware/logger.js";
import { notFound } from "./middleware/notFound.js";
import { validateEvent } from "./middleware/validateEvent.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { eventsRouter } from "./routes/eventsRouter.js";
import { patchValidateEvents } from "./middleware/patchValidateEvents.js"; 

const app = express()
const PORT = 3006

app.use(logger)
app.use(express.json())

app.get("/" ,(req,res)=> {
    res.json({ message: "Ana sehife"})
})
app.use("/events", eventsRouter)

// app.all("/*splat", (req,res)=>{
//     res.status(404).json({error: `Route not found: ${req.method} , ${req.originalUrl}`})
// });

app.use(notFound)
app.use(errorHandler)
app.listen(PORT ,()=>{
    console.log(`URL : http://localhost:${PORT}`);  
});

