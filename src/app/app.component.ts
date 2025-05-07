import { Component } from '@angular/core';
interface Row {
  id: number;
  name: string;
  age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  table1Data: Row[] = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Alice', age: 30 },
    { id: 3, name: 'Bob', age: 35 }
  ];

  table2Data: Row[] = [];

  selectedRow: Row | null = null;

  constructor() { }

  onSelect(row: Row) {
    this.selectedRow = row;
  }
  onSelect2(row: Row) {
    this.selectedRow = row;
  }


  onMoveToTable2() {
    if (this.selectedRow) {
      this.table2Data.push(this.selectedRow);
      this.table1Data = this.table1Data.filter(item => item !== this.selectedRow);
      this.selectedRow = null;
    }
  }

  onMoveToTable1() {
    if (this.selectedRow) {
      this.table1Data.push(this.selectedRow);
      this.table2Data = this.table2Data.filter(item => item !== this.selectedRow);
      this.selectedRow = null;
    }
  }

  onMoveAllToTable1() {
    this.table1Data.push(...this.table2Data);
    this.table2Data = [];
  }

  onMoveAllToTable2() {
    this.table2Data.push(...this.table1Data);
    this.table1Data = [];
  }

  
}
