import {
  Auth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from '@angular/fire/auth';

import { Injectable, OnInit } from '@angular/core';
import { LoginData } from '../interfaces/login-data.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  constructor(private auth: Auth) {}
  ngOnInit(): void {
    
  }

  login({ email, password }: LoginData) {
    console.log(signInWithEmailAndPassword(this.auth, email, password));
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  register({ email, password }: LoginData) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }
}