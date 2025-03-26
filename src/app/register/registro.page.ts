import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { CrudService } from '../services/crud.service';
import { AuthenticateService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  user: any = {
    email: null,
    senha: null,
    confirm_senha: null
  }

  constructor(
    private message: MessageService,
    private crudService: CrudService,
    private authService: AuthenticateService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  registrar(){
    if (this.user.senha != this.user.confirm_senha){
      this.message.show('As senhas não conferem!', 3000);
      return;
    }

    this.authService.register(this.user.email, this.user.senha)
    .then(response => {
      if (response)
        this.router.navigate(['/login']);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() =>{
      console.log('Requisição Finalizada');
    })

  }

}
