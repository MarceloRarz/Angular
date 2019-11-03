import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  firstname = 'Marcelo';

  pessoa = {
    primeironome: 'Lauren',
    ultimonome: 'Calixto',
    idade: 2,
    endereco: 'cohab'
  }

  valor = 2;

  constructor() { }

  ngOnInit() {
  }

}
