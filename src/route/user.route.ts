import express,{Request,Response,NextFunction} from "express";
// import { getUsers, createUser, deleteUser } from "../controllers/userController";

const router = express.Router();

router.get('/',(req:Request,res:Response,next:NextFunction)=>{
    res.json({status:200,message:"User route"}) 
})

export default router;
