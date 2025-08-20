import express from "express";
import cors from "cors";
import 'dotenv/config'
import connectBD from "./configs/db.js";
import { clerkMiddleware } from '@clerk/express'
import {serve} from "inngest/express";
import {inngest,functions} from "./inngest/index.js";
import showRouter from "./routes/showRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";
import adminRouter from "./routes/adminRoutes.js";
import userRouter from "./routes/userRoutes.js";

const app = express();
await connectBD();

// Middleware
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use('/api/inngest', serve({ client: inngest, functions }))
app.use('/api/show',showRouter)
app.use('/api/booking', bookingRouter)
app.use('/api/admin', adminRouter)
app.use('/api/user', userRouter)



app.listen(port, ()=> console.log(`Server listening at http://localhost:${port}`));


