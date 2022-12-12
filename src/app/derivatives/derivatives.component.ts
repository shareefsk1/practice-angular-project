import { Component } from '@angular/core';

@Component({
  selector: 'app-derivatives',
  templateUrl: './derivatives.component.html',
  styleUrls: ['./derivatives.component.css']
})
export class DerivativesComponent {
    public names: string[] = ["shareef","shaik","frontend","developer","fullstackDeveloper","datascience","mechineLearning"];

    public time :number = 19;


    public head : any = ['Name',"Age",'Package','Role']

    public table : any = [{name:'shareef',age:24,package:'40',Role:'fullstack'},
                          {name:'shareef1',age:15,package:'15',Role:'fullstack'},
                          {name:'shareef2',age:30,package:'50',Role:'fullstack'},
                          {name:'shareef3',age:21,package:'20',Role:'fullstack'},
                          {name:'shareef4',age:35,package:'80',Role:'fullstack'}]


     public today : any = new Date()                     



     

  }
