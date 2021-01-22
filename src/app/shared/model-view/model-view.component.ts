import { IModelData } from './../interfaces/model-data';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-model-view',
  templateUrl: './model-view.component.html',
  styleUrls: ['./model-view.component.scss']
})
export class ModelViewComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  header: string;
  active = 1;

  ngOnInit() {
    this.header = this.route.snapshot.paramMap.get('heading');
  }

}
