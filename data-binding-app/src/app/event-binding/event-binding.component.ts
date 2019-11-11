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
  selectDisabled = false;
  selectedOption = 1;
  inputName="Marcelo"

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

  cbChange(event){
    console.log(event.checked)  
    this.selectDisabled = event.checked;
  }

  selectiononChange(event) {
    console.log(event)
    this.selectedOption = event.value;
  }

  inputEvent(event){
    console.log(event.target.value);
    console.log(this.inputName);
  }

}
