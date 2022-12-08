import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
    public name : string = "shareef" ;

    public age: number = 20 ;

    public IsIndian:boolean = true ;

    click() {
      alert ("clicked") ;
    }    

    dblclick() {
      alert("double click")
    }

    enter() {
      alert("mouse entered")
    }

    leave() {
      alert("mouse leave")
    }

    keypressed(){
      alert("key pressed")
    }

    public number : number = 0;

}
