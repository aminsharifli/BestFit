const CATEGORIES = ["Fitness", "Yoga", "Cardio", "Combat", "Strength", "Dance", "Flexibility"]
export function patchValidateEvents(req,res,next){
    const{title, category, description, time, price} = req.body;
    const errors = []

    if(Object.keys(req.body).length === 0){
    errors.push("Bos olmamalidir")
    }

    if(title !== undefined && (typeof title !== "string" || title.trim() === "")){
        errors.push("Title tələb olunur")
    }
    if(description !== undefined && (typeof description !=="string" || description.trim === "")){
        errors.push("Description mütleqdir")
    }
    if(time !== undefined && (typeof time !=="string" || time.trim === "")){
        errors.push("Time mütleqdir")
    }
    if(price !== undefined && (typeof price !=="number" || price < 0)){
        errors.push("Price mütləqdir və rəqəm olmalıdır")
    }
    if(category !== undefined && (category !== undefined && !CATEGORIES.includes(category))){
        errors.push("Category uyğun deyil")
    }
    if(errors.length > 0){
        return res.status(400).json({ error: "Validation failded" , details: errors})
    }
    next()
}