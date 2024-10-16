import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
    conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente Pai',
      modelo: 'modelo3'
    },

    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Componente Filho',
      modelo: 'modelo2'
    },

    {
      conteudo: 'A tecnologia tem avançado a passos largos nas últimas décadas, transformando profundamente a maneira como vivemos, trabalhamos e nos comunicamos. Desde a invenção da internet até a popularização de dispositivos móveis, como smartphones e tablets, a conectividade global tem gerado um fluxo constante de inovações. Essas mudanças não só facilitaram o acesso à informação, mas também criaram novas oportunidades para o desenvolvimento pessoal e profissional em diversas áreas, como educação, saúde e negócios, tornando o mundo mais interconectado do que nunca.',
      autoria: '',
      modelo: 'modelo1'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
