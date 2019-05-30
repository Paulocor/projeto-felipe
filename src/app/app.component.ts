import { Component, OnInit } from '@angular/core';
import JsonService from '../assets/mock/generated.json';
import { ITableModel } from './table-model/itable-model.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

 /**
   * Componente principal
   * 
   * É NECESSARIO implemsntar a INTERFACE ITableModel ao componente
   *  
   */
  
export class AppComponent implements OnInit, ITableModel {
  
  //Titulo da tabela
  title: string;
  //Linhas 
  rows: any[];
  //Colunas
  cols: any[];
  

  constructor() { }

  ngOnInit() {

  /**
   * Seta dados na inicialização do componente
   */
    this.title = 'My Table Component';
    this.setRows();
    this.setCols();

  }

  /**
   * Dados |JSON|SERVICE|
   */
  setRows(): void {
    this.rows = JsonService;
  }

  /**
   * Dados apresentado no topo da datela HEADER
   */
  setCols(): void {
    this.cols = [
      { field: 'about', header: 'Sobre', type: 'string' },
      { field: 'eyeColor', header: 'Color', type: 'string' },
      { field: 'name', header: 'Name', type: 'string' },
      { field: 'phone', header: 'Phone', type: 'string' },
      { field: 'tags', header: 'Atributos', type: 'string' },
      { field: 'registered', header: 'Data registro', type: 'date' }
    ]

  }
}
