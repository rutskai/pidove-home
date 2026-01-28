import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class User {
   accounts: { email: string; nickname:string; password: string }[] = [];
   currentUser:{email:string, nickname:string} | null = null;

   addAccount(email: string, nickname:string, password: string) {
    this.accounts.push({ email, nickname, password });
  }

  getAccounts() {
    return this.accounts;
  }

  validateLogin(email: string, password: string) {
    const user=this.accounts.find(acc => acc.email === email && acc.password === password);
    if(user){
      this.currentUser= {email:user.email, nickname: user.nickname};
      return true;
    }
    return false;

  }

  getCurrentUser(){
    return this.currentUser;
  }
  
}
