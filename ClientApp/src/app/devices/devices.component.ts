import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<arrDevices>;
  
  dataSource: any;

 
  constructor(private httpService: HttpClient) { }
  arrDevices: string[];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'type'];
 

  ngOnInit() {
    
    this.httpService.get('/assets/art.json').subscribe(
      data => {
        this.arrDevices = data as string[];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
    this.dataSource = this.arrDevices;

  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
   this.table.dataSource = this.dataSource; 
  }
}
