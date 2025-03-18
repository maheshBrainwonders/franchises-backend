import mongoose from "mongoose";

interface ICategory {
    categoryName: string,
    categoryDescription: string,
    isActive: boolean
}

const categorySchema = new mongoose.Schema<ICategory>({
    categoryName: { type: String, required: true },
    categoryDescription: { type: String, required: true },
    isActive: { type: Boolean, required: true, default: true }
}, {
    timestamps: true
})

const CategoryModel = mongoose.model("category", categorySchema)

export default CategoryModel