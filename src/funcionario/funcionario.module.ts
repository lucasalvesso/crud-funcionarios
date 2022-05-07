import { Module } from '@nestjs/common';
import { FuncionarioController } from './funcionario.controller';
import { FuncionarioService } from './funcionario.service';
import { FuncionarioRepository } from './funcionario.repository';

@Module({
  imports: [],
  controllers: [FuncionarioController],
  providers: [FuncionarioService, FuncionarioRepository],
})
export class FuncionarioModule {}
