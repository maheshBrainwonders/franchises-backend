import Joi from "joi";

// Define the schema for a single franchise
export const franchiseSchema = Joi.object({
  name: Joi.string().required(),
  logo: Joi.string().uri().required(),
  industry: Joi.string().required(),
  description: Joi.string().required(),
  investment_min: Joi.number().min(0).required(),
  investment_max: Joi.number().greater(Joi.ref("investment_min")).required(),
  franchise_fee: Joi.number().min(0).required(),
  royalty_fee: Joi.number().min(0).required(),
  locations: Joi.array().items(Joi.string()).min(1).required(),
  support_details: Joi.string().required(),
  contact_email: Joi.string().email().required(),
  contact_phone: Joi.string().pattern(/^[0-9]{10}$/).required(), // Ensures 10-digit phone number
});

// Define the schema for an array of franchises
export const franchiseArraySchema = Joi.array().items(franchiseSchema).min(1);
