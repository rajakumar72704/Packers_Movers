import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import fileUpload from 'express-fileupload';
import consignmentRouter from "./routes/consignment.router.js";


dotenv.config();
const app = express();   

//to link routers
import UserRouter from './routes/user.router.js';
import CategoryRouter from './routes/category.router.js';
import SubCategoryRouter from './routes/subcategory.router.js';
import aiRoutes from './routes/ai.router.js';



//to link controller
import Gateway from './controller/payment.controller.js';
 

//to allow cross origin request
app.use(cors());


//To configure fileupload to extract a binary data from body
app.use(fileUpload());

//configuration to fetch req body content : body parser middleware
//used to fetch req data from methods like : POST , PUT , PATCH , DELETE
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//config to load routers
app.use("/user",UserRouter);
app.use("/category",CategoryRouter);
app.use("/subcategory",SubCategoryRouter);
app.use("/consignment", consignmentRouter);

// AI Route
app.use("/api/ai", aiRoutes);


//method to load Gateway
app.post("/payment",Gateway);



app.listen(3001);
console.log("server invoked at link http://localhost:3001");