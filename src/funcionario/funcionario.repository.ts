import { Injectable } from '@nestjs/common';
import { FuncionarioInterface } from './funcionario.interface';

@Injectable()
export class FuncionarioRepository {
  funcionarios = [];

  criar(funcionario: FuncionarioInterface) {
    this.funcionarios.push(funcionario);
  }

  listar() {
    return this.funcionarios;
  }
}
