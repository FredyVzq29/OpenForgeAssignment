import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from './url';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private URL:string = url.users_api;

  constructor(
    private httpClient:HttpClient
  ) { }

  getUsersList(since_){
    return this.httpClient.get(this.URL + "?since="+since_+"=0&per_page=50")
  }

  getUserDetail(username){
    return this.httpClient.get(this.URL + "/"+username)
  }
}
