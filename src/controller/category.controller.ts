/**
 * @file Category Controller
 * @description Handles API requests related to category management.
 * @author Mahesh Prajapati
 * @date 2025-03-18
 */

import { Request, Response, NextFunction } from 'express';
import CategoryService from '../services/category.services';

class CategoryController {
  
  /**
   * @method create
   * @description Creates a new category.
   * @route POST /categories
   */
  static create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const category = await CategoryService.createCategory(req.body);
      res.status(201).json(category);
    } catch (error) {
      res.status(500).json({ error: "Error creating category" });
    }
  };

  /**
   * @method bulkCreate
   * @description Creates multiple categories in bulk.
   * @route POST /categories/bulk
   */
  static bulkCreate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const categories = await CategoryService.bulkCreate(req.body);
      res.status(201).json({ status: 201, message: "Created successfully", data: categories });
    } catch (error) {
      res.status(500).json({ error: "Error creating categories" });
    }
  };

  /**
   * @method getAll
   * @description Retrieves all categories.
   * @route GET /categories
   */
  static getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const categories = await CategoryService.getAllCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: "Error fetching categories" });
    }
  };

  /**
   * @method getById
   * @description Retrieves a category by its ID.
   * @route GET /categories/:id
   */
  static getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const category = await CategoryService.getCategoryById(req.params.id);
      
      if (!category) return next({ error: "Category not found" });

      res.json({ status: 200, data: category });
    } catch (error) {
      next(error);
    }
  };

  /**
   * @method update
   * @description Updates an existing category by ID.
   * @route PUT /categories/:id
   */
  static update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const category = await CategoryService.updateCategory(req.params.id, req.body);

      if (!category) return next({ error: "Category not found" });

      res.json(category);
    } catch (error) {
      res.status(500).json({ error: "Error updating category" });
    }
  };

  /**
   * @method delete
   * @description Deletes a category by ID.
   * @route DELETE /categories/:id
   */
  static delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const category = await CategoryService.deleteCategory(req.params.id);

      if (!category) return next({ error: "Category not found" });

      res.json({ message: "Category deleted successfully" });
    } catch (error) {
      next(error); // Pass the error to the global error handler
    }
  };
}

export default CategoryController;
