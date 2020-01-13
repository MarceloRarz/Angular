import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {

  @Input() nome: string;
  @Input() sobrenome: string
  @Input('apelido') nickname: string


  constructor() { }

  ngOnInit() {
  }

}
