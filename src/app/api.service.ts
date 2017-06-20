import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject, Subject} from "rxjs/Rx";
import { Http, Response, Headers, RequestOptions } from '@angular/http';



@Injectable()
export class ApiService {

  private isAuth: BehaviorSubject<boolean> = new BehaviorSubject(true);
  private setAuthPath = "/api/setAuth";

  constructor(private http: Http) { 

  }

  auth() {
    return this.isAuth.asObservable();
  }

  public setAuth(): any{
  	return this.http.get(this.setAuthPath)
      .map((res:Response) => {
        if (!res.json().error) {
        	console.log(res);
        }
    });
  }

}
