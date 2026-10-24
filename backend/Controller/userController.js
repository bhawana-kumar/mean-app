const User = require("../model/userModel");
 const getAllUsers = async (req,res,next)=>{
    try {
        const users = await User.find();
        return res.status(200).send(users)
         } catch (error) {
        return next(createError(500,"Internal Server Error"))
    }
}

 const getUserById = async (req,res,next)=>{
    try {
        const user = await User.findById(req.params.id)
        if(!user)
            return next(createError(404,"User not found"))
            return res.status(200).send(user)
           
        } catch (error) {
        return next(createError(500,"Internal Server Error"))
    }
}
module.exports={getAllUsers,getUserById}