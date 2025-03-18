import FranchiseModel, { IFranchise } from "../models/franchise.model";

class FranchiseService {
    static getAllFranchises = async (): Promise<IFranchise[]> => {
      return await FranchiseModel.find();
    };
  
    static getFranchiseById = async (id: string): Promise<IFranchise | null> => {
      return await FranchiseModel.findById(id);
    };
  
    static createFranchise = async (data: IFranchise) => {
      const franchise = new FranchiseModel(data);
      return await franchise.save();
    };

    static bulkCreate=async (data:IFranchise[])=>{
      const franchise=await FranchiseModel.insertMany(data)
      return franchise
    }
  
    static updateFranchise = async (id: string, data: Partial<IFranchise>): Promise<IFranchise | null> => {
      return await FranchiseModel.findByIdAndUpdate(id, data, { new: true });
    };
  
    static deleteFranchise = async (id: string): Promise<IFranchise | null> => {
      return await FranchiseModel.findByIdAndDelete(id);
    };
  }
  
  export default FranchiseService;
  