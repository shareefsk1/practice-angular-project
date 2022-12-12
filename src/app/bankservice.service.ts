import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankserviceService {

  public amount2: number = 1200;

  deposite(amount:number){
        this.amount2 = this.amount2 + amount ;
        
  }

  withdraw(amount:number){
    this.amount2 = this.amount2 - amount ;
}

getbalance(){
  return this.amount2 ;
 
}

  constructor() { }
}
