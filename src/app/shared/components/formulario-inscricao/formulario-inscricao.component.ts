import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-inscricao',
  templateUrl: './formulario-inscricao.component.html',
  styleUrls: ['./formulario-inscricao.component.scss'],
})
export class FormularioInscricaoComponent implements OnInit {

  formularioInscricao: any

  ngOnInit(){
    this.iniciarFormulario();
  }

  enviar() { 
    alert('Seu formulário foi enviado !');
  }

  iniciarFormulario() {
    this.formularioInscricao = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      sobrenome: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required, Validators.minLength(8)]),
      cep: new FormControl('', [Validators.required]),
      endereco: new FormControl('', [Validators.required]),
      bairro: new FormControl('', [Validators.required]),
      complemento: new FormControl('', [Validators.required]),
      cidade: new FormControl('', [Validators.required]),
      estado: new FormControl('', [Validators.required])
    })
  }

}