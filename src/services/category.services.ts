import CategoryModel, { ICategory } from "../models/category.model";

class CategoryService {
    // Get all categories
    static getAllCategories = async (): Promise<ICategory[]> => {
        return await CategoryModel.find();
    };

    // Get a single category by ID
    static getCategoryById = async (id: string): Promise<ICategory | null> => {
        return await CategoryModel.findById(id);
    };

    // Create a new category
    static createCategory = async (data: ICategory) => {
        const category = new CategoryModel(data);
        return await category.save();
    };

    // Bulk create categories
    static bulkCreate = async (data: ICategory[]): Promise<ICategory[]> => {
        return await CategoryModel.insertMany(data);
    };

    // Update a category
    static updateCategory = async (id: string, data: Partial<ICategory>): Promise<ICategory | null> => {
        return await CategoryModel.findByIdAndUpdate(id, data, { new: true });
    };

    // Delete a category
    static deleteCategory = async (id: string): Promise<ICategory | null> => {
        return await CategoryModel.findByIdAndDelete(id);
    };
}

export default CategoryService;
