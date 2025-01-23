import { NextFunction, Request, Response } from "express";
import { autoInjectable } from "tsyringe";
import { ProductService } from "../service/productService";
import { plainToInstance } from "class-transformer";

@autoInjectable()
export class ProductController {
    constructor(
        private readonly productService : ProductService
    ) {}
    async createProduct(req: Request, res: Response, next: NextFunction) {
        try {
            const product = await this.productService.createProduct(req.body);
            res.json(product);
        } catch (error) {
            next(error);
        }
    }
    async getAllProduct(req: Request, res: Response, next: NextFunction){
        try {
            const products = await this.productService.getAllProduct(req.query);
            res.json(products);
        } catch (error) {
            next(error);
        }
    }
    async getProductById(req: Request, res: Response, next: NextFunction){
        try {
            const product = await this.productService.getProductById(req.params.id);
            res.json(product);
        } catch (error) {
            next(error);
        }
    }
    async updateProduct(req: Request, res: Response, next: NextFunction){
        try{
            const product = await this.productService.updateProduct(req.params.id, req.body);
            res.json(product);
        }
        catch(error){
            next(error);
        }
    }
    async deleteProduct(req: Request, res: Response, next: NextFunction){
        try{
            const product = await this.productService.deleteProduct(req.params.id);
            res.json(product);
        }
        catch(error){
            next(error);
        }
    }
}