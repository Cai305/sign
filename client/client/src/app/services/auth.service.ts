import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { AngularFireAuth } from  "@angular/fire/auth";
import firebase from 'firebase/app'
//import { User } from  'firebase';

interface User {
  uid: string;
  email: string;
  displayName: string;
  phoneNumber: string;
  photoURL: string;
}
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  user: User;

  constructor(public  afAuth:  AngularFireAuth, public  router:  Router) { 
    this.afAuth.authState.subscribe((user: User) => {
      if (user){
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })

  }



async login(user:any) {
    var result = await this.afAuth.signInWithEmailAndPassword(user.email,user.password).then((res)=>{console.log(res)})
   // this.router.navigate(['list']);
}

async register(user:any) {
  var result = await this.afAuth.createUserWithEmailAndPassword(user.email, user.password).then((res)=>{console.log(res)})
  this.sendEmailVerification();
}

async sendEmailVerification() {
  await (await this.afAuth.currentUser).sendEmailVerification()
  this.router.navigate(['verify-email']);
}

async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.afAuth.sendPasswordResetEmail(passwordResetEmail);
 }


 async logout(){
  await this.afAuth.signOut();
  localStorage.removeItem('user');
  this.router.navigate(['login']);
 }

get isLoggedIn(): boolean {
  const  user  =  JSON.parse(localStorage.getItem('user'));
  return  user  !==  null;
}

async  loginWithGoogle(){
  await  this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
}


}
