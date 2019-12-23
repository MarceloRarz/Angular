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

  constructor() { }

  ngOnInit() {
  }

}
