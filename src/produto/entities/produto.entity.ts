import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity ({name:"tb_produto"})
export class Produto {

@PrimaryGeneratedColumn()
@ApiProperty()
id:number 

@IsNotEmpty()
@MaxLength(100)
@Column({length:100, nullable:false})
@ApiProperty()
nome: string

@IsNotEmpty()
@Column("decimal", {precision: 10, scale:2})
@ApiProperty()
preco: number

@Column({default: false})
@ApiProperty()
disponibilidade: boolean 

@Column({default: false})
@ApiProperty()
reutilizavel: boolean

@ApiProperty({ type: () => Categoria})
@ManyToOne(() => Categoria, (Categoria) => Categoria.produto,{
    onDelete: "CASCADE"
})
categoria: Categoria[]

@ApiProperty({ type: () => Usuario})
@ManyToOne(() => Usuario, (Usuario) => Usuario.produto,{
    onDelete: "CASCADE"
})
usuario: Usuario[]
  
    

}



// nome preco disponibilidade reutilizavel