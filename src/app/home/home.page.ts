import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router, UrlHandlingStrategy } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage{

  perfil: any = {
    foto: null,
    nome: null,
    profissao: null,
    nome_usuario: null,
    idioma: null,
    localidade: null,
    data_inicio: null,
    biografia: null,
    estatisticas: {
      curtidas: 0,
      seguindo: 0,
      amigos: 0,
    },
    postagens: [
      {
        foto:'https://i.pinimg.com/736x/76/8f/31/768f31a66e51d7bd2bafae6e04064d06.jpg',
        nome:'Vovó Turbo',
        nome_usuario:'@vovoturbo',
        texto:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita officiis ullam recusandae iusto facilis nobis cum quasi labore praesentium dolorem excepturi iure aspernatur, amet culpa in ducimus adipisci, voluptates vitae!',
        data:'12/03/2025 14:00',
      },
      {
        foto:'https://i.pinimg.com/736x/76/8f/31/768f31a66e51d7bd2bafae6e04064d06.jpg',
        nome:'Vovó Turbo',
        nome_usuario:'@vovoturbo',
        texto:'outro post',
        data:'12/03/2025 14:10',
      },
      {
        foto:'https://i.pinimg.com/736x/76/8f/31/768f31a66e51d7bd2bafae6e04064d06.jpg',
        nome:'Vovó Turbo',
        nome_usuario:'@vovoturbo',
        texto:'Hello world',
        data:'12/03/2025 14:30',
      },
      {
        foto:'https://i.pinimg.com/736x/76/8f/31/768f31a66e51d7bd2bafae6e04064d06.jpg',
        nome:'Vovó Turbo',
        nome_usuario:'@vovoturbo',
        texto:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita officiis ullam recusandae iusto facilis nobis cum quasi labore praesentium dolorem excepturi iure aspernatur, amet culpa in ducimus adipisci, voluptates vitae!',
        data:'12/03/2025 14:00',
      },
      {
        foto:'https://i.pinimg.com/736x/76/8f/31/768f31a66e51d7bd2bafae6e04064d06.jpg',
        nome:'Vovó Turbo',
        nome_usuario:'@vovoturbo',
        texto:'outro post',
        data:'12/03/2025 14:10',
      },
      {
        foto:'https://i.pinimg.com/736x/76/8f/31/768f31a66e51d7bd2bafae6e04064d06.jpg',
        nome:'Vovó Turbo',
        nome_usuario:'@vovoturbo',
        texto:'Hello world',
        data:'12/03/2025 14:30',
      },
    ]
  }

  constructor(){}
}
