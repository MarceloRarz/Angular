import { Component, OnInit, Input } from '@angular/core';
import { Client } from './client.model';


@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {

  @Input() nome: string;
  @Input() sobrenome: string;
  @Input('apelido') nickname: string;
  @Input() idade: number;

  clients: Client[];

  constructor() {
    this.clients = [
      {id:1, nome:"Bob", idade:10},
      {id:2, nome:"Ana", idade:20},
      {id:3, nome:"Jonh", idade:30},
      {id:4, nome:"Maria", idade:40},
    ];
   }

  ngOnInit() {
  }

}
