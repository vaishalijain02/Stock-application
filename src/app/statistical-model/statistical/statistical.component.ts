import { IModelData } from './../../shared/interfaces/model-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistical',
  templateUrl: './statistical.component.html',
  styleUrls: ['./statistical.component.scss']
})
export class StatisticalComponent implements OnInit {

  constructor() { }
  modelList: IModelData[] = [
                  { id: 1,
                    heading :'Recursive Model',
                    content: ''
                  },
                  { id: 2,
                    heading : 'Regression',
                    content: ''
                  },
                  {
                    id: 3,
                    heading : 'Black Scholes Model',
                    content: ''
                  }
              ]
  ngOnInit() {
  }

}
