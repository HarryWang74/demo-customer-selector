import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Customer } from '../interfaces/customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  @Input()
  customer: Customer;

  @Output()
  shift = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  left()  { this.shift.emit(-1); }
  right() { this.shift.emit(1); }
}
