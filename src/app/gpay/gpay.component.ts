import { Component } from '@angular/core';
import { BankserviceService } from '../bankservice.service';

@Component({
  selector: 'app-gpay',
  templateUrl: './gpay.component.html',
  styleUrls: ['./gpay.component.css']
})
export class GpayComponent {

  public amount1: number = 0 ;

constructor(private _bankServive:BankserviceService){
  
}

deposite(){
  this._bankServive.deposite(this.amount1)
}

withdraw(){
  this._bankServive.withdraw(this.amount1)
}

showbalance(){
  alert(this._bankServive.getbalance())
}

}
