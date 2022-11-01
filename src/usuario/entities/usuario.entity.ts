import { IsNotEmpty, MaxLength } from "class-validator";
import { Produto } from "src/produto/entities/produto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity ({name:"tb_usuario"})
export class Usuario{
   
    @PrimaryGeneratedColumn()
    id:number

    @IsNotEmpty()
    @MaxLength(100)
    @Column({length:100, nullable:false})
    nome:string

    @IsNotEmpty()
    @MaxLength(100)
    @Column({length:100, nullable:false})
    usuario:string    //e-mail

    @IsNotEmpty()
    @MaxLength(100)
    @Column({length:100, nullable:false})
    foto:string

    @IsNotEmpty()
    @MaxLength(100)
    @Column({length:100, nullable:false})
    senha:string


    @OneToMany(() => Produto, (Produto) => Produto.usuario)
    produto: Produto[] 



} 