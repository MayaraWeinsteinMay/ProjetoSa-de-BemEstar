import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";
import { Produto } from "src/produto/entities/produto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity ({name:"tb_usuario"})
export class Usuario{
   
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id:number

    @IsNotEmpty()
    @MaxLength(100)
    @Column({length:100, nullable:false})
    @ApiProperty()
    nome:string

    @IsNotEmpty()
    @MaxLength(100)
    @Column({length:100, nullable:false})
    @ApiProperty({ example: "email@email.com.br"})
    usuario:string    //e-mail

    @IsNotEmpty()
    @MaxLength(100)
    @Column({length:100, nullable:false})
    @ApiProperty()
    foto:string

    @IsNotEmpty()
    @MaxLength(100)
    @Column({length:100, nullable:false})
    @ApiProperty()
    senha:string

    @ApiProperty({ type: () => Produto})
    @OneToMany(() => Produto, (Produto) => Produto.usuario)
    produto: Produto[] 



} 