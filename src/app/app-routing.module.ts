import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DerivativesComponent } from './derivatives/derivatives.component';
import { GpayComponent } from './gpay/gpay.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"login", component:LoginComponent},
  {path:"dashboard", component:DashboardComponent ,children:[{path:"home", component:HomeComponent},
                    {path:"calculator", component:CalculatorComponent},
                    {path:"data-binding", component:DataBindingComponent},
                    {path:"derivatives", component:DerivativesComponent},
                    {path:'table', component:TableComponent},
                    {path:'Gpay',component:GpayComponent}     ] }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
