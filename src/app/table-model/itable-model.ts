/**
 * Interface reponsavel para implementar a table
 */
export interface ITableModel {

  title: string;
  rows: any[];
  cols: any[];
  

  setRows():void;
  setCols():void;   
 
}