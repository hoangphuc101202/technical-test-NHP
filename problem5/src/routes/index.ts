import { Router, Request, Response, NextFunction } from "express";
import productRoutes from './product.route';
const indexRoute = Router();

indexRoute.use("/product", productRoutes);

export default indexRoute;