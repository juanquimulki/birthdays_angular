import { Component, OnInit } from '@angular/core';
import { days } from '../data/days';
import { months } from '../data/months';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  days = days;
  months = months;
  filterForm;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router
  ) { }

  show() {
    let day   = this.filterForm.controls['day'].value;
    let month = this.filterForm.controls['month'].value;
    this.route.navigate(["show",day,month]);
  }

  ngOnInit() {
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();

    this.filterForm = this.formBuilder.group({
      day: day,
      month: month
    }); 
  }

}
