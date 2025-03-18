import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from './route/index'
import connectDB from "./database";
import errorHandler from "./middleware/errorhandler.middleware";
import logger from "./utils/winston";
import morganMiddleware from "./utils/morgan";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3006;
app.use(cors());
app.use(express.json());
app.use(morganMiddleware)
app.get("/", (req, res) => {
  res.send("Welcome to Node.js + MongoDB API!");
});
app.use("/api", routes);
app.use(errorHandler)

connectDB().then(()=>{
    app.listen(PORT, () => {
      logger.info(`Server running on http://localhost:${PORT}`);
    });

}).catch((e)=>{
console.log(e)
})
