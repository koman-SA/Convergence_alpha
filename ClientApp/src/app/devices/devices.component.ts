import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table'
import { StringLiteral } from 'typescript';
import { DevicesDataSource, DevicesItem } from './devices-datasource';


interface IDevice {

  id: string;
  site: string;
  workstation: string;
  description: string;
  type: string;
  username: string;
  last_online: string;


}

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  dataSource: MatTableDataSource<IDevice>;
  devices: IDevice[];
  columns: string[] = ['id', 'site', 'workstation', 'description', 'type', 'username', 'last_online']
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor() {

    this.devices = [{
      id: '1',
      site: 'headoffice',
      workstation: 'desktop01',
      description: 'mydevice',
      type: 'laptop',
      username: 'eliasonw',
      last_online: '2020-09-20 10:10:10'
    },
      {
        id: '2',
        site: 'headoffice',
        workstation: 'desktop02',
        description: 'mydevice',
        type: 'laptop',
        username: 'eliasonj',
        last_online: '2020-09-20 10:10:10'

      }];
    this.dataSource = new MatTableDataSource(this.devices);
  }
  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
   
  }
  applyFilter(event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
