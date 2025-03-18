import { Router } from "express";
import userRoute from "./user.route";
import categoryRoute from './category.route'
import franchiseRoute from './franchise.route'

const router = Router();


const routes = [
  { path: "/user", handler: userRoute },
  { path: "/category", handler: categoryRoute },
  { path: "/franchises", handler: franchiseRoute }
];

// Register routes
routes.forEach(({ path, handler }) => {
  router.use(path, handler);
});

export default router;
