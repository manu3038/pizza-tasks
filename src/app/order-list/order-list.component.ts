import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { OrderListService } from './order-list.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  constructor(private fb: FormBuilder, private service: OrderListService) {}
  prizzaOrdersForm: FormGroup
  orderRows: FormArray;
  statusList = [
    { status: 'Order Received', value: 'o' },
    { status: 'Preparing', value: 'p' },
    { status: 'Ready to serve', value: 'r' },
  ];
  ngOnInit() {
    this.prizzaOrdersForm  = this.fb.group({
      orderRows: this.fb.array([])
    });
    this.orderRows = this.prizzaOrdersForm.get('orderRows') as FormArray;
    const patchArray = [];
    this.service.ordersArray.forEach((i) => {
      patchArray.push({
        custName: i.custName,
        noOfItems: i.noOfItems,
        amt: i.amt,
        status: i.status,
      });
      this.addRow();
    });
    this.orderRows.patchValue(patchArray);
    console.table(this.orderRows.value);
  }
  addRow(){
    this.orderRows.push(this.addOrder());
  }

  addOrder(): FormGroup {
    return this.fb.group({
      custName: '',
      noOfItems: '',
      amt: '',
      status: '',
    });
  }
}
