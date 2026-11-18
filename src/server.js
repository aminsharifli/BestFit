import express from "express";
import { events } from "./data/events.js";

const app = express()
const PORT = 3000

app.get("/" ,(req,res)=> {
    res.json({ message: "Ana sehife"})
})
app.get("/events", (req,res) => {
    console.log(req.query);
    const {title, category, description, time, maxPrice} = req.query;
    let result = events; 

    if(title){
        result = result.filter((e)=> e.title.toLocaleLowerCase() === title.toLocaleLowerCase()) 
    }
    if(category){
        result = result.filter((e)=> e.category.toLocaleLowerCase() === category.toLocaleLowerCase())
    }
    if(description){
        result = result.filter((e)=> e.description.toLocaleLowerCase() === description.toLocaleLowerCase())
    }
    if(time){
    result = result.filter((e)=> e.time === time)
    }
    if(maxPrice){
        result = result.filter((e) => e.price <= Number(maxPrice))
    }
    
    res.json(result);

});

app.get("/events/:id", (req,res)=>{
    const id = Number(req.params.id)
    if(Number.isNaN(id)){
        return res.status(400).json({error: "Id must be a number"})
    }
    const event = events.find((e)=> e.id === id)
    if(!event){
        return res.status(404).json({error: "Error not found"})
    }
    res.status(200).json(event);
});

app.all("/*splat", (req,res)=>{
    res.status(404).json({error: `Route not found: ${req.method} , ${req.originalUrl}`})
});

app.listen(PORT ,()=>{
    console.log(`URL : http://localhost:${PORT}`);  
});

