/**
 * @file Franchise Routes
 * @description Defines API routes for managing franchises.
 * @author Mahesh Prajapati
 * @date 2025-03-18
 */

import { Router } from "express";
import FranchiseController from "../controller/franchise.controller";

const franchiseRouter = Router();

/**
 * @route POST /api/franchises
 * @description Create a new franchise
 */
franchiseRouter.post("/", FranchiseController.create);

/**
 * @route POST /api/franchises/bulk
 * @description Create multiple franchises at once
 */
franchiseRouter.post("/bulk", FranchiseController.bulkCreate);

/**
 * @route GET /api/franchises
 * @description Get all franchises
 */
franchiseRouter.get("/", FranchiseController.getAll);

/**
 * @route GET /api/franchises/:id
 * @description Get a single franchise by ID
 */
franchiseRouter.get("/:id", FranchiseController.getById);

/**
 * @route PUT /api/franchises/:id
 * @description Update a franchise by ID
 */
franchiseRouter.put("/:id", FranchiseController.update);

/**
 * @route DELETE /api/franchises/:id
 * @description Delete a franchise by ID
 */
franchiseRouter.delete("/:id", FranchiseController.delete);

export default franchiseRouter;
