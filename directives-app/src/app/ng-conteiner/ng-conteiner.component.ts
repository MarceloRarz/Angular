import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-conteiner',
  templateUrl: './ng-conteiner.component.html',
  styleUrls: ['./ng-conteiner.component.css']
})
export class NgConteinerComponent implements OnInit {

  users = [
    {login: "bob", role:"admin", lastlogin: new Date('01/02/2020')},
    {login: "lia", role:"user", lastlogin: new Date('01/03/2020')},
    {login: "john", role:"admin", lastlogin: new Date('01/04/2020')},
    {login: "robin", role:"user", lastlogin: new Date('01/05/2020')}
  ];

  constructor() { }

  ngOnInit() {
  }

}
