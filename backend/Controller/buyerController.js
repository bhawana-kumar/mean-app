const Buyer = require("../model/buyerModel");
 const getAllBuyersData = async (req,res,next)=>{
    try {
        const users = await Buyer.find();
        return res.status(200).send(users)
         } catch (error) {
        return next(createError(500,"Internal Server Error"))
    }
}

 const getBuyerById = async (req,res,next)=>{
    try {
        const user = await Buyer.findById(req.params.id)
        if(!user)
            return next(createError(404,"User not found"))
            return res.status(200).send(user)
           
        } catch (error) {
        return next(createError(500,"Internal Server Error"))
    }
}
module.exports={getAllBuyersData,getBuyerById}