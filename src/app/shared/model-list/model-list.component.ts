import { AuthService } from './../services/auth.service';
import { IModelData } from './../interfaces/model-data';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.scss']
})
export class ModelListComponent implements OnInit {

  constructor(private auth: AuthService) { }
  @Input() heading: string;
  @Input() modelList: IModelData;
  authLock: boolean = true;
  searchText: string;

  ngOnInit() {
    this.authLock = this.auth.isLoggedIn();
  }

}
