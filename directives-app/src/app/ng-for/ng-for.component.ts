import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  names = [
    "Ana",
    "Maria",
    "João",
    "Marcos",
    "Marcelo"
  ]

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
