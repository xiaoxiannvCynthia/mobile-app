import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Router } from '@angular/router';
import { LoginPageRoutingModule } from './login-routing.module';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  form = { pwd:"", email:""};
  

  
  constructor(private router:Router) {}

  log(){
   
    firebase.auth().signInWithEmailAndPassword(this.form.email,this.form.pwd).then(
    r => {
      //jump to todolist
      this.router.navigate(['all-todo'])
      console.log("log!")
    },
    err => {
      console.log(err)
    })
 
  }

  logWithGoogle(){
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(
      result=> {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.providerId;
      // The signed-in user info.
      var user = result.user;
      
      this.router.navigate(['all-todo'])
      
    }).catch(function(error) {
      
    }); 
  }
  logWithFacebook(){
    let provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(
      result=> {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.providerId;
      // The signed-in user info.
      var user = result.user;
      
      this.router.navigate(['all-todo'])
      
    }).catch(function(error) {
      
    }); 
  }
      

    
  }


  


