import { events } from "../data/events.js";

export function getEvents(req,res){
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
}

export function getIdEvents(req,res){
    const id = Number(req.params.id)
    if(Number.isNaN(id)){
        return res.status(400).json({error: "Id must be a number"})
    }
    const event = events.find((e)=> e.id === id)
    if(!event){
        return res.status(404).json({error: "Error not found"})
    }
    res.status(200).json(event);
}

export function postEvents(req,res){
    const {title, category, description, time, price} = req.body
    const id = Math.max(...events.map((e) => e.id)) +1 ;
    const event = {id, title, category, description, time, price}

    events.push(event);
    res.status(201).json(event);
}

export function patchEvents(req, res){
    const id = Number(req.params.id);
    const index = events.findIndex((e)=> e.id === id)

    if(index == -1){
        return res.status(404).json({error: "events tapilmadi"})
    }
    events[index] = {... events[index], ...req.body, id};
    res.json(events[index])
}

export function deletEvents(req, res){
    const id = Number(req.params.id)
    if(Number.isNaN(id)){
        return res.status(400).json({error: "id reqem olmalidir"})
    }
    const index = events.findIndex((e)=> e.id === id);
    if(index === -1){
        return res.status(404).json({error: "Bele event yoxdur"})
    }

    events.splice(index, 1);
    res.status(204).end();
}
