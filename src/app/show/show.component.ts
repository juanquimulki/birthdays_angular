import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

//import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
//import {  ParamMap } from '@angular/router';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  columnsToDisplay = ['name','org','years'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  data; // = new MatTableDataSource(this.dataService.getItems());
  day; month;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    //private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.day = +params.get('day'); 
      this.month = +params.get('month');
      //alert(this.day); 

      this.dataService.getItems(this.day,this.month).subscribe(
        (datos: unknown[]) => {
          //alert(this.day);
          this.data = new MatTableDataSource(datos); //.results;
          this.data.sort = this.sort;
          //this.info = data.info
          console.log(datos);
      });
    });

    //console.log(this.dataService.getItems());
  }

}
