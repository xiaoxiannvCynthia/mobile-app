import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { ToastController } from '@ionic/angular';
import {AlertController} from '@ionic/angular';

 
@Component({
  selector: 'app-registre',
  templateUrl: './registre.page.html',
  styleUrls: ['./registre.page.scss'],
})
export class RegistrePage  {
  form = { pwd:"", email:""}

  constructor(private router:Router,public toastCtrl:ToastController, public alertCtrl:AlertController) { }

  regis(){
    firebase.auth().createUserWithEmailAndPassword(this.form.email,this.form.pwd).then((data) => {
      let newUser: firebase.User = data.user;
      newUser.updateProfile({
        displayName:this.form.email,
        photoURL:"",
       
      }).then((res)=>{
       
        this.alertCt();

        //this.router.navigate(['login'])
      }).catch((err)=>{
        this.toastLoginFail(err); 
      })
      //jump to todolist
      //this.router.navigate(['login'])
      //console.log("log!")
    }).catch((err)=>{
      console.log(err);
      this.toastLoginFail(err); 
    })
    
  }
  async toastLoginFail(err) {
    const alert = await this.toastCtrl.create({
      message: err.message,
      duration: 3000
    });
    alert.present();
  }
  
  async alertCt(){
    const alertCtrl= await this.alertCtrl.create({
      header:"Account created",
      message:"Your account has been created successfully",
      buttons:[
        {
          text:"OK",
          handler: ()=>{
            this.router.navigate(['login'])
          }
        }
      ]

    });
    alertCtrl.present();
  }
  
}
