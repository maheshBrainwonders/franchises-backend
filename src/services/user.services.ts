import UserModel, { IUser } from "../models/userModels"

export default class UserService {
    static createUser = async (data: IUser) => {
        const result=await UserModel.insertOne(data)
        return result
    }
}