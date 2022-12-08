import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  public first : number = 0;
  public second : number = 0;

  public res:number = 0

  add(){
    this.res = this.first + this.second
  }

  min(){
    this.res = this.first - this.second
  }

  div(){
    this.res = this.first / this.second
  }

  mul(){
    this.res = this.first * this.second
  }

  
}
