
// 'mongodb+srv://krunalkharat010:autoTradeHub2024@cluster1.h5yjvta.mongodb.net/autoTradeHubDb'
// 'mongodb+srv://dhanashreeg:carDekho@cluster0.mf4uzau.mongodb.net/Cars'
// process.env.CONNECTION_STRING


const mongoose=require('mongoose')

const connectDb= async()=>{
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("database connected");

    }catch(err){
        console.log(err);
        process.exit(1);

    }
}

module.exports =connectDb

