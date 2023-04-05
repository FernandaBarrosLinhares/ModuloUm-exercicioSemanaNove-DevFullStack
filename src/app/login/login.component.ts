import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit{
 loginFormModel: { nome: string; senha: string; confirmaSenha: string; } = {
  nome:'',
  senha:'',
  confirmaSenha:'',
 };

 constructor(){}

 ngOnInit(){
  this.criarForm();
 }

 criarForm(){
  this.loginFormModel={
  nome:'',
  senha:'',
  confirmaSenha:'',
 }
}
// }
// onSumit(){
//   console.log('loginFormModel: ',this.loginFormModel)
// }
onSumit(){
  if (this.loginFormModel.senha !== this.loginFormModel.confirmaSenha){
    window.alert(`erro`);
  } else{
    window.alert (`ok`);
  }
 }
}
