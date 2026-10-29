import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Usuario } from './services/usuario';

@Component({
  imports: [RouterOutlet, FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('cadastro-usuarios-front-v2');

nome = '';
cpf = '';
email = '';
endereco = '';
telefone = '';
mensagem = '';
erroCadastro = false;

cadastrarUsuario() {
  const usuario = {
    nome: this.nome,
    cpf: this.cpf,
    email: this.email,
    endereco: this.endereco,
    telefone: this.telefone
  };

  console.log('Dados do formulário:', usuario);

  this.usuarioService.cadastrarUsuario(usuario).subscribe({
   next: (resposta) => {
  console.log('Resposta da API:', resposta);
  this.mensagem = 'Usuário cadastrado com sucesso!';
  this.erroCadastro = false;
},
    error: (erro) => {
  console.error('Erro ao cadastrar usuário:', erro);
  this.mensagem = 'Não foi possível cadastrar. Verifique se a API está em execução.';
  this.erroCadastro = true;
}
  });
}

constructor(private usuarioService: Usuario) {}
}
