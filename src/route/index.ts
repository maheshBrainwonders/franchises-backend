import { Router } from "express";
import userRoute from "./user.route";
import categoryRoute from './category.route'
import franchiseRouter from "./franchise.route";

const router = Router();


const routes = [
  { path: "/user", handler: userRoute },
  { path: "/categories", handler: categoryRoute },
  { path: "/franchises", handler: franchiseRouter }
];

// Register routes
routes.forEach(({ path, handler }) => {
  router.use(path, handler);
});

export default router;
