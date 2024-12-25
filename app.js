// import express from "express";
// import cors from "cors";
// import dotenv from 'dotenv'
//  import{dbConnection} from "./database/dbConnection.js";
// import { errrorMiddleware } from "./error/error.js";


// import reservationRouter from"./routes/reservation.js"


// const app = express();
// dotenv.config({path:"./config/config.env"});

// // app.use(
// //     cors({
// //     origin:[process.env.FRONTEND_URL],
// //     methods:["POST"],
// //     credentials:true,
// //     })
   
// // );
// app.use(
//     cors({
//       origin: process.env.FRONTEND_URL, // Ensure this matches your frontend's URL
//       methods: ["POST"],
//       credentials: true,
//     })
//   );
  
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// app.use('/api/v1/reservation',reservationRouter)

// dbConnection();
// app.use(errrorMiddleware)
// export default app;
import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import { dbConnection } from "./database/dbConnection.js";
import { errrorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservation.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(
  cors({
    origin: process.env.FRONTEND_URL, // Ensure this matches the frontend's URL
    methods: ["GET", "POST", "OPTIONS"], // Allow OPTIONS for preflight requests
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/reservation', reservationRouter);

dbConnection();
app.use(errrorMiddleware);

export default app;
