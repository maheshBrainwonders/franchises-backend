/**
 * @file Category Routes
 * @description Defines API routes for managing categories.
 * @author Mahesh Prajapati
 * @date 2025-03-18
 */

import { Router } from "express";
import CategoryController from "../controller/category.controller";

const categoryRouter = Router();

/**
 * @route POST /categories
 * @description Create a new category
 */
categoryRouter.post("/", CategoryController.create);

/**
 * @route POST /categories/bulk
 * @description Create multiple categories at once
 */
categoryRouter.post("/bulk", CategoryController.bulkCreate);

/**
 * @route GET /categories
 * @description Get all categories
 */
categoryRouter.get("/", CategoryController.getAll);

/**
 * @route GET /categories/:id
 * @description Get a single category by ID
 */
categoryRouter.get("/:id", CategoryController.getById);

/**
 * @route PUT /categories/:id
 * @description Update a category by ID
 */
categoryRouter.put("/:id", CategoryController.update);

/**
 * @route DELETE /categories/:id
 * @description Delete a category by ID
 */
categoryRouter.delete("/:id", CategoryController.delete);

export default categoryRouter;
