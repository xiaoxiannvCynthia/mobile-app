import { Injectable } from '@angular/core';
import { Router,CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{

  constructor(private router:Router) { }
 
  canActivate(route:ActivatedRouteSnapshot){
    let islogged = firebase.auth().currentUser!=null
    if (islogged == false){
      this.router.navigate(['login'])
    }
    return islogged;
  }

}
