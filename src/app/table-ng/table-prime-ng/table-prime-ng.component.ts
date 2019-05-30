import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({

  selector: 'app-table-prime-ng',
  templateUrl: './table-prime-ng.component.html',
  styleUrls: ['./table-prime-ng.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TablePrimeNgComponent implements OnInit {
  /**
   * Componente que recebe os dados para pobular a tabela
   *  
   */
  
   // titulo da tabela EX: Minha Tabela
  @Input() tbTitle: string;

  // Array de obj json 
  @Input() tbRows: any[];

  // titulo das colunas
  @Input() tbCols: any[];

  constructor() {
  }
  
  ngOnInit() {
  }
}