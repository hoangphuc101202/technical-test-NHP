import { Repository } from "typeorm";
import { Products } from "../database/entities/products";
import AppDataSource from "../database";
import { autoInjectable } from "tsyringe";

@autoInjectable()
export class ProductRepository extends Repository<Products> {
  constructor() {
    super(Products, AppDataSource.manager);
  }
}