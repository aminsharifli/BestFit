const CATEGORIES = ["Fitness", "Yoga", "Cardio", "Combat", "Strength", "Dance", "Flexibility"]
export function validateEvent(req,res,next){
    const{title, category, description, time, price} = req.body;
    const errors = []

    if(typeof title !== "string" || title.trim() === ""){
        errors.push("Title tələb olunur")
    }
    if(typeof description !=="string" || description.trim === ""){
        errors.push("Description mütleqdir")
    }
    if(typeof time !=="string" || time.trim === ""){
        errors.push("Time mütleqdir")
    }
    if(typeof price !=="number" || price < 0){
        errors.push("Price mütləqdir və rəqəm olmalıdır")
    }
    if(category !== undefined && !CATEGORIES.includes(category)){
        errors.push("Category uyğun deyil")
    }
    if(errors.length > 0){
        return res.status(400).json({ error: "Validation failded" , details: errors})
    }
    next()
}