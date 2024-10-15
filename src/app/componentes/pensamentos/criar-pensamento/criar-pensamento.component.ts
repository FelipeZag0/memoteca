import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento = {
    id: '1',
    conteudo: "Aprendendo Angular",
    autoria: 'Dev',
    modelo: 'modelo1'
  }

  criarPensamento() {
    alert("Novo pensamento criado!")
  }

  cancelar() {
    alert("Ação cancelada!")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
