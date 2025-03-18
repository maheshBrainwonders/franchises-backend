import { Request, Response, NextFunction } from "express"

export default class CategoryController {
    static createCategory = (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = req.body
            console.log("data", data)
        } catch (error) {
            return next(error)
        }
    }

    static getCategory = (req: Request, res: Response, next: NextFunction) => {
        try {
            res.json({ status: 200, message: "Get all data successfully", data: [] })
        } catch (error) {
            return next(error)
        }
    }
}   