
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
providedIn: 'root'
})
export class Usuario {

    private apiUrl = 'https://localhost:7045/api/Usuario';

constructor(private http: HttpClient) {}

cadastrarUsuario(usuario: {
    nome: string;
    cpf: string;
    email: string;
    endereco: string;
    telefone: string;
 }) {
    return this.http.post(this.apiUrl, usuario);
 }

}
