import { IsNotEmpty, MaxLength } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity ({name:"tb_produto"})
export class Produto {

@PrimaryGeneratedColumn()
id:number 

@IsNotEmpty()
@MaxLength(100)
@Column({length:100, nullable:false})
nome: string

@IsNotEmpty()
@Column("decimal", {precision: 10, scale:2})
preco: number

@Column({default: false})
disponibilidade: boolean 

@Column({default: false})
reutilizavel: boolean

@ManyToOne(() => Categoria, (Categoria) => Categoria.produto,{
    onDelete: "CASCADE"
})
categoria: Categoria[]


@ManyToOne(() => Usuario, (Usuario) => Usuario.produto,{
    onDelete: "CASCADE"
})
usuario: Usuario[]
  
    

}



// nome preco disponibilidade reutilizavel