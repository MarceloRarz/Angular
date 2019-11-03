import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  NomeButton = 'Incrementar';
  i = 0;
  spinermode = 'determinate';
  bntEnabled = true;

  constructor() { }

  ngOnInit() {
  }

  salvar()  {
    console.log('click');
  }

  incremento() {
     this.i++;
     this.NomeButton = 'Click Realizados ' + this.i + ' vezes';
     console.log(this.i);
  }

  desabilitar() {
    this.bntEnabled = false;
    this.spinermode = 'indeterminate';
    setTimeout( () => {
      this.bntEnabled = true;
      this.spinermode = 'determinate';
    }, 3000 )
  }

}
