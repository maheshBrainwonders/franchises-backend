/**
 * @file Franchise Controller
 * @description Handles API requests related to franchise management.
 * @author Mahesh Prajapati
 * @date 2025-03-18
 */

import { Request, Response, NextFunction } from 'express';
import FranchiseService from "../services/franchise.services";

class FranchiseController {
  
  /**
   * @method create
   * @description Creates a new franchise.
   * @route POST /api/franchises
   */
  static create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const franchise = await FranchiseService.createFranchise(req.body);
      res.status(201).json(franchise);
    } catch (error) {
      res.status(500).json({ error: "Error creating franchise" });
    }
  };

  /**
   * @method bulkCreate
   * @description Creates multiple franchises in bulk.
   * @route POST /api/franchises/bulk
   */
  static bulkCreate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const franchise = await FranchiseService.bulkCreate(req.body);
      res.status(201).json({ status: 201, message: "Created successfully", data: franchise });
    } catch (error) {
      res.status(500).json({ error: "Error creating franchises" });
    }
  };

  /**
   * @method getAll
   * @description Retrieves all franchises.
   * @route GET /api/franchises
   */
  static getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const franchises = await FranchiseService.getAllFranchises();
      res.json(franchises);
    } catch (error) {
      res.status(500).json({ error: "Error fetching franchises" });
    }
  };

  /**
   * @method getById
   * @description Retrieves a franchise by its ID.
   * @route GET /api/franchises/:id
   */
  static getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const franchise = await FranchiseService.getFranchiseById(req.params.id);
      
      if (!franchise) return next({ error: "Franchise not found" });

      res.json({ status: 200, data: franchise });
    } catch (error) {
      next(error);
    }
  };

  /**
   * @method update
   * @description Updates an existing franchise by ID.
   * @route PUT /api/franchises/:id
   */
  static update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const franchise = await FranchiseService.updateFranchise(req.params.id, req.body);

      if (!franchise) return next({ error: "Franchise not found" });

      res.json(franchise);
    } catch (error) {
      res.status(500).json({ error: "Error updating franchise" });
    }
  };

  /**
   * @method delete
   * @description Deletes a franchise by ID.
   * @route DELETE /api/franchises/:id
   */
  static delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const franchise = await FranchiseService.deleteFranchise(req.params.id);

      if (!franchise) return next({ error: "Franchise not found" });

      res.json({ message: "Franchise deleted successfully" });
    } catch (error) {
      next(error); // Pass the error to the global error handler
    }
  };
}

export default FranchiseController;
