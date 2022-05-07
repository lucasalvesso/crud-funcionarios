import { Body, Controller, Get, Post } from '@nestjs/common';
import { FuncionarioService } from './funcionario.service';
import { FuncionarioDto } from './funcionario.dto';

@Controller('funcionario')
export class FuncionarioController {
  constructor(private funcionarioService: FuncionarioService) {}

  @Post()
  criarFuncionario(@Body() funcionario: FuncionarioDto) {
    return this.funcionarioService.criarFuncionario(funcionario);
  }

  @Get()
  listarFuncionarios() {
    return this.funcionarioService.listarFuncionarios();
  }
}
