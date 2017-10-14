import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import { Account } from '../../models/account/account.inteface';
import { LoginResponse } from '../../models/login/login-response.interface';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(private auth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }

  getAuthenticatedUser() {
    return this.auth.authState;
  }

  async createUserWithEmailAndPassword(account: Account) {
    try {
      return <LoginResponse>{
        result: await this.auth.auth.createUserWithEmailAndPassword(account.email, account.password)
      }
    } catch (e) {
      return <LoginResponse>{
        error: e
      };
    }
  }

  async signWithEmailAndPassword(account: Account) {
    try {
      return <LoginResponse>{
        result: await this.auth.auth.signInWithEmailAndPassword(account.email, account.password)
      };
    } catch (e) {
      return <LoginResponse>{
        error: e
      };
    }
  }

  signOut() {
    this.auth.auth.signOut();
  }

}
