import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.css']
})
export class NgForFormComponent implements OnInit {

  nome: string = "";
  endereco: string = "";
  fone: string = "";
  cidade: string = "";
  idade: number = 0;

  cidades = [
    {nome: "São Paulo", estado: "SP"},
    {nome: "Porto Alegre", estado: "RS"},
    {nome: "Recife", estado: "PE"},
    {nome: "Curitiba", estado: "PR"},
    {nome: "Rio de Janeiro", estado: "RJ"}

  ];

  clientes = []

  constructor() { }

  ngOnInit() {
  }

  save() {
    this.clientes.push(
      { 
        nome: this.nome,
        endereco: this.endereco,
        fone: this.fone,
        cidade: this.cidade,
        idade: this.idade
      }
    );
    this.cancel();
    console.log(this.clientes);
  }
  cancel() {
    this.nome = '';
    this.endereco = '';
    this.fone = '';
    this.cidade = '';
    this.idade = 0;
  }
  delete(i: number){
   // console.log("delete: " + i)
    this.clientes.splice(i,1);
  }
}
