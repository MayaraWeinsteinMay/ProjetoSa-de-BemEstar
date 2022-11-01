import { IsNotEmpty, MaxLength } from "class-validator";
import { Produto } from "src/produto/entities/produto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity ({name: "tb_categoria"})
export class Categoria{

    @PrimaryGeneratedColumn()
    id:number

    @IsNotEmpty()
    @MaxLength(100)
    @Column({length: 100, nullable:false})
    nome: string


    @Column({default: false})
     doacao: boolean 
 
     @OneToMany(() => Produto,(Produto) => Produto.categoria,{
        onDelete: "CASCADE"
    })
    produto: Produto[]
   

}
