import { IModelData } from './../interfaces/model-data';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelDataService {

  constructor() { }

  private model: IModelData;

  setModelData(data: IModelData) {
    this.model = data;
  }

  getModelData(): IModelData {
    return this.model;
  }
}
