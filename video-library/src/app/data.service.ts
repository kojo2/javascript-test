import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getComponent } from '@angular/core/src/linker/component_factory_resolver';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data;

  constructor(private http:HttpClient) { 

  }

  getData() {
    return this.http.get('https://titan.asset.tv/api/channel-view-json/2240');
  }

  getMcd() {
    return this.data.mcd;
  }

  getTabs(){
    return this.data.tabs;
  }

  getContent(){
    if(!this.data){
      this.getData().subscribe(data=>{
        this.data = data;
        return this.data.content;
      })
    }else{
      return this.data.content;
    }
  }
}
