import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Categoria } from "../entities/categoria.entity";

Injectable()
export class CategoriaService{

    constructor(
        @InjectRepository(Categoria)
        private categoriaRepository: Repository<Categoria>
    ) {}

     async findAll(): Promise<Categoria[]> {
        return await this.categoriaRepository.find({
           relations:{
                produto:true 
           }
           })
        }

        async findByDoacao(doacao: boolean): Promise<Categoria[]> {
            return await this.categoriaRepository.find({
                
                })
            };


        async findById(id: number): Promise<Categoria> {
            let categoria = await this.categoriaRepository.findOne({

    
                where: {
                  id
                },
                relations:{
                    produto:true 
               }
                
            })
            if (!Categoria)
                throw new HttpException('Postagem não existe', HttpStatus.NOT_FOUND)
    
            return categoria
        }

        async findByNome(Nome: string): Promise<Categoria[]> {
            return await this.categoriaRepository.find({
    
                where: {
                    nome: ILike(`%${Nome}%`)
                },
                relations:{
                    produto:true 
               }
            })
    
        }

        
        async create(categoria: Categoria): Promise<Categoria> {
            return await this.categoriaRepository.save(categoria)
        }
     
        async update(categoria: Categoria): Promise<Categoria> {

            let buscarPostagem = await this.findById(categoria.id)
    
            if (!buscarPostagem || !categoria.id)
                throw new HttpException('Postagem não existe', HttpStatus.NOT_FOUND)
    
            return await this.categoriaRepository.save(categoria)
    
        }

        async Delete(id: number): Promise<DeleteResult> {

            let buscarCategoria = await this.findById(id)
    
            if (!buscarCategoria)
                throw new HttpException('Postagem não encontrada', HttpStatus.NOT_FOUND)
    
            return await this.categoriaRepository.delete(id)
    
        }
















}


//id nome Doacao