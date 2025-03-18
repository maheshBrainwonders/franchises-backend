import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { ValidationError } from "joi";

// Define a custom error interface to extend Error
interface CustomError extends Error {
  status?: number;
  details?: string[]; // For handling validation errors
}

// Error handling middleware with TypeScript types
const errorHandler: ErrorRequestHandler = (
  err: CustomError | ValidationError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error(err.stack); // Log the error for debugging

  // Handle Joi validation errors
  if (err instanceof ValidationError) {
    res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: err.details.map((detail) => detail.message),
    });
    return;
  }

  // Set status code (use error status if provided, otherwise 500)
  const statusCode: number =  500;

  // Send error response
  res.status(statusCode).json({
    success: false,
    message: err.message || "Something went wrong on the server",
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }), // Show stack trace in development
  });

  return;
};

export default errorHandler;
    