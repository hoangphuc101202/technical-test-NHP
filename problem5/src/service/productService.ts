import { autoInjectable } from "tsyringe";
import { ProductRepository } from "../repository/productRepository";
import { DataReponse } from "../middleware/response";
import { StatusCodes } from "http-status-codes";
import { ILike }  from "typeorm";
import { validate as uuidValidate } from 'uuid';
export interface CreateProductDto {
    name: string;
    price: number;
    description?: string;
}

interface UpdateProductDto {
    name? : string;
    price? : number;
    description?: string;
}
interface FilterProduct{
    name? : string;
    page? : number;
    limit? : number;
}

@autoInjectable()
export class ProductService{
    constructor(
        private readonly productRepository: ProductRepository
    ){}
    async createProduct(body: CreateProductDto){
        const productExist = await this.productRepository.findOne({
            where: {
                name: body.name
            }
        })
        if(productExist){
            return new DataReponse({}, `product name ${body.name} is already exist`, StatusCodes.BAD_REQUEST);
        }
        await this.productRepository.insert(body);
        return new DataReponse({}, "Product created successfully", StatusCodes.CREATED);
    }
    async getAllProduct(filter: FilterProduct) {
        const { name, page = 1, limit = 5 } = filter;
    
        if (name) {
            const product = await this.productRepository.find({
                where: { 
                    name: ILike(`%${name}%`) 
                }
            });
            return new DataReponse(product, "Product found", StatusCodes.OK);
        }
    
        const [products, total] = await this.productRepository.findAndCount({
            skip: (page - 1) * limit,
            take: limit,
        });
    
        return new DataReponse(
            {
                data: products,
                total,
                currentPage: page,
                totalPages: Math.ceil(total / limit),
            },
            "Products found",
            StatusCodes.OK
        );
    }
    async getProductById(id : string ){
        if (!uuidValidate(id)) {
            return new DataReponse({}, 'Invalid UUID format', StatusCodes.BAD_REQUEST);
        }
        const product = await this.productRepository.findOne({
            where: {
                id
            }
        });
        if(!product){
            return new DataReponse({}, `Product with id ${id} not found`, StatusCodes.NOT_FOUND);
        }
        return new DataReponse(product, "Product found", StatusCodes.OK);
    }
    async updateProduct(id: string, body: UpdateProductDto){
        if (!uuidValidate(id)) {
            return new DataReponse({}, 'Invalid UUID format', StatusCodes.BAD_REQUEST);
        }
        if (
            body.name?.trim() === '' || 
            body.description?.trim() === '' || 
            (body.price == null || body.price <= 0)
        ) {
            return new DataReponse(
                {}, 
                'Name, description and price cannot be empty strings', 
                StatusCodes.BAD_REQUEST
            );
        }
        const product = await this.productRepository.findOne({
            where: {
                id
            }
        });
        if(!product){
            return new DataReponse({}, `Product with id ${id} not found`, StatusCodes.NOT_FOUND);
        }
        await this.productRepository.update(id, body);
        return new DataReponse({}, "Product updated successfully", StatusCodes.OK);
    }
    async deleteProduct(id: string){
        if (!uuidValidate(id)) {
            return new DataReponse({}, 'Invalid UUID format', StatusCodes.BAD_REQUEST);
        }
        const product = await this.productRepository.findOne({
            where: {
                id
            }
        });
        if(!product){
            return new DataReponse({}, `Product with id ${id} not found`, StatusCodes.NOT_FOUND);
        }
        await this.productRepository.delete(id);
        return new DataReponse({}, "Product deleted successfully", StatusCodes.OK);
    }
}