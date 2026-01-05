import express from "express";
import cors from "cors";

import stripeRoutes from "./routes/stripe.routes.js";
import { webhook } from "./controllers/stripe.controller.js";

const app = express();

// app.use(express.json());


app.use( (req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(
      `${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`
    );
  });

  next();
})

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.get("/", (req,res)=>{
    res.send("Hello from server!!")
})

app.use("/api/stripe",express.json(), stripeRoutes);

app.post(
  '/api/stripe/webhook',
  express.raw({ type: 'application/json' }),
  webhook
);



app.use((err, req, res, next) => {
  console.error("EXPRESS GLOBAL ERROR HANDLER:", err);

  res.status(500).json({
    message: err.message || "Internal Server Error",
  });
});


export default app;
