import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-data-table',
  templateUrl: './custom-data-table.component.html',
  styleUrls: ['./custom-data-table.component.css']
})
export class CustomDataTableComponent implements OnInit  {
  @Input() title = 'DataTable';
  @Input() headers = [];
  @Input() keyField;
  @Input() pagination = false;
  @Input() data;
  @Input() noData = '';
  @Input() width;
  @Input() pageLength;
  @Input() paginationType;

  constructor() {
  }

  ngOnInit() {
    this.headers.sort((a, b) => {
      if (a.index > b.index) {
        return 1;
      }
      return -1;
    });
  }

  getObjectKeys(d) {
    return Object.keys(d);
  }

}
