import { Injectable } from '@angular/core';
import {observable, Observable} from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
 
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse ,HttpParams} from '@angular/common/http';
import { error } from '@angular/compiler/src/util';



@Injectable()
 

export class AppService {

  private url = 'https://chatapi.edwisor.com';
  firstName: any;
  lastName: any;
  mobile: any;
  email: any;
  password: any;
  apiKey: any;


  constructor(public http:HttpClient) { }

  public getUserInfoFromLocalstorage = () => {

    return JSON.parse(localStorage.getItem('userInfo'));

  } // end getUserInfoFromLocalstorage


  public setUserInfoInLocalStorage = (data) =>{

    localStorage.setItem('userInfo', JSON.stringify(data))


  }

 public signupFunction(data): Observable<any> {

    
  const data = {

    firstName: this.firstName,

    lastName: this.lastName,

    mobile: this.mobile,

    email: this.email,

    password: this.password,

    apiKey: this.apiKey

  };
    
    
    return this.http.post(`${this.url}/api/v1/users/signup`,data);

  }
  public signinFunction(data): Observable<any> {

    const params = new HttpParams()
    .set('email',data.email)
    .set('password',data.password);

    return this.http.post(`${this.url}/api/v1/users/login`,params);
  }

  private handleError(err: HttpErrorResponse) {

    let errorMessage = '';

    if (err.error instanceof Error) {

      errorMessage = `An error occurred: ${err.error.message}`;

    } else {

      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;

    } // end condition *if

    console.error(errorMessage);

    return Observable.throw(errorMessage);

  }  // END handleError
}
