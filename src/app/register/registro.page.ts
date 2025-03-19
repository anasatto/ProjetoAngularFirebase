import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { CrudService } from '../services/crud.service';

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
    private crudService: CrudService
  ) { }

  ngOnInit() {
  }

  registrar(){
    if (this.user.senha != this.user.confirm_senha){
      this.message.show('As senhas não conferem!', 3000);
      return;
    }

    this.crudService.insert(this.user, 'user');
  

  }

}
