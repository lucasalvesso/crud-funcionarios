import { Injectable } from '@nestjs/common';
import { FuncionarioRepository } from './funcionario.repository';
import { FuncionarioInterface } from './funcionario.interface';

@Injectable()
export class FuncionarioService {
  constructor(private repository: FuncionarioRepository) {}

  criarFuncionario(funcionario: FuncionarioInterface) {
    return this.repository.criar(funcionario);
  }

  listarFuncionarios() {
    return this.repository.listar();
  }
}
