const mongoose=require('mongoose')
const express=require('express')
const cors=require('cors')
const cookieSession = require("cookie-session");


const dotenv = require ("dotenv");
dotenv.config();
connectDb = require('../ConnectionConfig/connect')
connectDb(); 
const ex=express();
ex.use(express.json())


const corsOptions = {
    origin: "http://localhost:4200",
    credentials: true
  };

  ex.use(cors(corsOptions));
  ex.use(express.urlencoded({ extended: true }));
  ex.use(
    cookieSession({
      name: "login-session",
      keys: ["COOKIE_SECRET"], // should use as secret environment variable
      httpOnly: true
    })
  );


const userRoute=require("../Routes/usersRoutes")
const buyerRoute=require("../Routes/buyerRoutes")
const sellerRoute=require("../Routes/sellerRoutes")
const adminRoute=require("../Routes/adminRoutes")
const vehicleRoute = require('../Routes/vehiclesRoutes');
const orderRoute=require("../Routes/orderRoutes")
const reportRoute=require("../Routes/reportRoutes")
const paymentRoute=require("../Routes/paymentRoutes")

const searchRoutes = require("../Routes/searchRoutes");
const carouselBrandFilterRoutes = require("../Routes/carouselBrandFilterRoutes");

require("../Routes/auth.routes")(ex);
require("../Routes/user.routes")(ex);


ex.use("/user", userRoute);
ex.use("/buyer", buyerRoute);
ex.use("/vehicleseller", sellerRoute);
ex.use("/admin", adminRoute);
ex.use("/vehicle", vehicleRoute);
ex.use("/order",orderRoute);
ex.use("/report",reportRoute);
ex.use("/search",searchRoutes);
ex.use("/payment",paymentRoute);
ex.use("/carouselBrandFilter",carouselBrandFilterRoutes);


const PORT= process.env.PORT || 4000; 
ex.listen(PORT,  ()=>console.log("listening on port 4000"));
