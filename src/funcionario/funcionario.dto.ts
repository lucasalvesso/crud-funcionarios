import { IsNumber, IsString } from 'class-validator';

export class FuncionarioDto {
  @IsString()
  readonly nome: string;

  @IsNumber()
  readonly idade: number;

  @IsString()
  readonly documento: string;

  @IsString()
  readonly cargo: string;
}
