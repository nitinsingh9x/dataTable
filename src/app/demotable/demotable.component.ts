import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-demotable',
  templateUrl: './demotable.component.html',
  styleUrls: ['./demotable.component.css']
})
export class DemotableComponent implements OnInit {
  @Input() title = 'DataTable';
  @Input() headers = [];
  @Input() keyField;
  @Input() pagination = false;
  @Input() data = [];
  @Input() noData = '';
  @Input() width;
  @Input() pageLength;
  @Input() paginationType;

  sortBy = null;
  descending = false;

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

  onSort(e) {
    let data = this.data.slice();
    let colTitle = e.target.dataset.col;
    let descending = !this.descending;

    data.sort((a, b) => {
      let sortVal = 0;
      if (a[colTitle] < b[colTitle]) {
        sortVal = -1;
      } else if (a[colTitle] > b[colTitle]) {
        sortVal = 1;
      }

      if (descending) {
        sortVal = sortVal * -1;
      }

      return sortVal;
    });

    this.data = data;
    this.descending = descending;
  }

  onDragStart(e, source) {
    e.dataTransfer.setData('text/plain', source);
  }

  onDragOver(e) {
    e.preventDefault();
  }

  onDrop(e, target) {
    e.preventDefault();
    let source = e.dataTransfer.getData('text/plain');
    let headers = this.headers;
    let srcHeader = headers[source];
    let targetHeader = headers[target];

    let temp = srcHeader.index;
    srcHeader.index = targetHeader.index;
    targetHeader.index = temp;

    headers[source] = targetHeader;
    headers[target] = srcHeader;

    this.headers = headers;
  }

}
