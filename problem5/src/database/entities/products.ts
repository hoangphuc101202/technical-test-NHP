import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import 'reflect-metadata';
@Entity('products')
export class Products {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
    @Column({type: 'varchar', length: 255})
    name!: string;
    @Column({type: 'varchar', length: 255})
    description!: string;
    @Column({type: 'int'})
    price!: number;
}