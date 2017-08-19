import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

/*
  Generated class for the JobServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class JobServiceProvider {

  private url: string = "http://localhost:3000/"; 

  constructor(private http: Http) {
    console.log('Hello JobServiceProvider Provider');
  }

  getJobs(){
    return this.http.get(this.url)
    .map(this.extractData)
    .do(this.logResponse)
    .catch(this.catchError)
  }

  private catchError(error: Response | any) {
    console.log(error);
    return Observable.throw(error.json().error || "Something is fucked up!");
  }

  private logResponse(res: Response) {
    console.log(res);
  }

  private extractData(res: Response) {
    return res.json();
  }

}
