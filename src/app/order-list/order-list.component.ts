import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderListService } from './order-list.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private service: OrderListService,
    public router: Router
  ) {}
  prizzaOrdersForm: FormGroup;
  orderRows: FormArray;
  statusList = [
    { status: 'Order Received', value: 'o' },
    { status: 'Preparing', value: 'p' },
    { status: 'Ready to serve', value: 'r' },
  ];
  ngOnInit() {
    this.prizzaOrdersForm = this.fb.group({
      orderRows: this.fb.array([]),
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
  addRow() {
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

  routeToEditPage(id: number) {
    this.router.navigate(['edit/' + id]);
  }

  changeStatus(idx: number) {
    const row = this.orderRows.controls[idx] as FormGroup;
    const currStatus = row.get('status').value;
    if (currStatus != undefined && currStatus != '') {
      if(currStatus == "o"){
        row.get('status').setValue("p");
      } else if(currStatus == "p"){
        row.get('status').setValue("r");
      }
    }
  }
}
