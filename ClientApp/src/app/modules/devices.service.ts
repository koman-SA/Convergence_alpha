import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor() { }

  getDevices(){

    //todo - grab link from env
    return axios.get('http://localhost:3000/devices')
  }

}
