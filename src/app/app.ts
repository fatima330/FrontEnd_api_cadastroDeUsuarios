
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

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

cadastrarUsuario() {
  console.log({
    nome: this.nome,
    cpf: this.cpf,
    email: this.email,
    endereco: this.endereco,
    telefone: this.telefone
  });
}
}
