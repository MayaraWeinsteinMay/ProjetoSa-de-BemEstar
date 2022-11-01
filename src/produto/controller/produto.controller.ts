import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/guard/jwt-auth.guard";
import { Produto } from "../entities/produto.entity";
import { ProdutoService } from "../service/produto.service";

@ApiTags('Produto')
@UseGuards(JwtAuthGuard)
@Controller ("/produto") 
@ApiBearerAuth()
export class ProdutoController{
    constructor (private readonly produtoService:ProdutoService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Produto[]> {
        return this.produtoService.findAll();
    }


    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id',ParseIntPipe) id: number): Promise <Produto> {
        return this.produtoService.findById(id)
    } 

    @Get('/nome/:nome')
    @HttpCode (HttpStatus.OK)
    findByNome(@Param('nome') nome: string): Promise <Produto[]>{
        return this.produtoService.findByNome(nome)
    }

    @Get('/:disponibilidade/ :disponibilidade')
    @HttpCode(HttpStatus.OK)
    findByDisponibilidade(@Param('id',ParseIntPipe) id: number): Promise <Produto>{
        return this.produtoService.findById(id)
    } 

    @Get('/:reutilizavel/ :reutilizavel')
    @HttpCode(HttpStatus.OK)
    findByReutilizavel(@Param('id',ParseIntPipe) id: number): Promise <Produto>{
        return this.produtoService.findById(id)
    } 
    
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() produto:Produto): Promise <Produto>{
        return this.produtoService.create(produto)

    } 

    @Put()
    @HttpCode(HttpStatus.OK)
    update (@Body()produto:Produto): Promise <Produto>{
        return this.produtoService.update(produto)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    Delete(@Param('id', ParseIntPipe) id:number){
    return this.produtoService.delete(id)


    
    }}