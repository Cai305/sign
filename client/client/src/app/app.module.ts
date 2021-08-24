import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChatComponent } from './containers/chat/chat.component';
import { UsernnameComponent } from './components/usernname/usernname.component';
import { LoginComponent } from './components/Authentication/login/login.component';
import { RegisterComponent } from './components/Authentication/register/register.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZXNDnqpIUmd4FS18D3NORrnSINKsFImI",
  authDomain: "sign-language-auth.firebaseapp.com",
  projectId: "sign-language-auth",
  storageBucket: "sign-language-auth.appspot.com",
  messagingSenderId: "728233562079",
  appId: "1:728233562079:web:c8850927524e13f5a83e6a",
  measurementId: "G-3K8BG9E3KG"
};



@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    UsernnameComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


