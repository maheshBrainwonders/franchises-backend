import mongoose from "mongoose";

export interface IUser extends Document {
    name:string,
    email:string,
    age:number,
    
}

const UserSchema = new mongoose.Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: false },
},{
    timestamps:true
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel
