import { Router, Request, Response, NextFunction } from "express";
import { container } from "tsyringe";
import { ProductController } from "../controller/productController";
import validateRequest from "../middleware/validateRequest";
import createProduct from "../shema/products";
const router = Router();

router.post('/', validateRequest(createProduct),(req: Request, res: Response, next: NextFunction) => {
    container.resolve(ProductController).createProduct(req, res, next);
})
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    container.resolve(ProductController).getAllProduct(req, res, next);
})
router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    container.resolve(ProductController).getProductById(req, res, next);
})
router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
    container.resolve(ProductController).updateProduct(req, res, next);
})
router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
    container.resolve(ProductController).deleteProduct(req, res, next);
})
export default router;