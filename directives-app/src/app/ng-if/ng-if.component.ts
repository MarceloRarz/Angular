import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  showNome: boolean = false;
  showEndereco: boolean = false;
  showFone: boolean = false;
  showIdade: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
