import { Injectable } from '@angular/core';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';

 

@Injectable({
  providedIn: 'root'
})

export class DevicesService {

  

  constructor(private http:HttpClient) { }

  public getDevices(){
    
    return this.http.get<[]>('/api/devices');    //todo - grab link from env
  //  return axios.get('http://localhost:4000/devices')
  }

}
