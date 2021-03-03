import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

export interface DevicesItem {

      name: string;
      id: number;
      type: string;

}

const EXAMPLE_DATA: DevicesItem[] = [

      {id: 1, name: 'Hydrogen', type: 'Test'},
      {id: 2, name: 'Helium', type: 'Test' },
      {id: 3, name: 'Lithium', type: 'Test' },
      {id: 4, name: 'Beryllium', type: 'Test'},
 
];

export class DevicesDataSource extends DataSource<DevicesItem> {

  data: DevicesItem[] = EXAMPLE_DATA;
    sort: MatSort;
    paginator: MatPaginator;
    

     
  constructor() {
    super();
  }
   
  connect(): Observable<DevicesItem[]> {
   
    const dataMutations = [

            observableOf(this.data),
            this.paginator.page,
            this.sort.sortChange

      ];

    return merge(...dataMutations).pipe(map(() => {

            return this.getPagedData(this.getSortedData([...this.data]));

    }));
  }

  disconnect() {}

  private getPagedData(data: DevicesItem[]) {

      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
  }

  private getSortedData(data: DevicesItem[]) {

    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b,) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'type': return compare(a.type, b.type, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: string | number, b: string | number, isAsc: boolean) {

   return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
