import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import * as jwt_decode from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
export const TOKEN_NAME:string='jwt_token';

@Injectable()
export class AuthenticationService{
    service_end_point:string;
    tokenVal:string;

    constructor(private httpClient:HttpClient){
        console.log('Inside constructor of AuthenticationService');
        this.service_end_point='http://localhost:8089/api/v1/userservice';
    }
    //Method for registering one new User
    registerUser(newUser){
        console.log('Inside registerUser()....')
        const url=this.service_end_point+"/register";
        console.log('Endpoint url is: ',url);
        console.log('The newUser is:',newUser);
        return this.httpClient.post(url,newUser,{responseType:'text'});
    }
    //Method for login
    loginUser(newUser){
        console.log('Inside loginUser()....');
        const url=this.service_end_point+"/login";
        console.log('User is:' ,newUser);
        console.log('Endpoint url is: ',url);
        return this.httpClient.post(url,newUser);
    }
    //Method for setting new token value
    settokenVal(tokenVal:string){
        console.log('Token Value is: ',tokenVal)
        return localStorage.setItem(TOKEN_NAME,tokenVal);
    }
    //Method for getting the token value
    gettokenVal(){
        return localStorage.getItem(TOKEN_NAME);
    }
    //Method for removing the token while logout
    deleteToken(){
        return localStorage.removeItem(TOKEN_NAME);
    }
    //Method for finding the expiration date of the Token
    getTokenExpirationDate(tokenVal:string):Date{
        const decoded=jwt_decode(tokenVal);
        if(decoded.exp === undefined) return null;
        const date=new Date(0);
        date.setUTCSeconds(decoded.exp);
        console.log('Token expiration date is',date);
        return date;
    }
    //Method for checking whether the token is expired or not
    isTokenExpired(tokenVal?:string):boolean{
        if(!tokenVal) tokenVal=this.gettokenVal();
        if(!tokenVal) return true;
        const date=this.getTokenExpirationDate(tokenVal);
        if(date===undefined || date==null) return false;
        return !(date.valueOf() > new Date().valueOf());
    }

    isAuthenticated(): boolean {
        const token = localStorage.getItem('jwt_token');
        // Check whether the token is expired and return
        // true or false
        return !this.isTokenExpired(token);
      }
}