import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderListService } from './order-list.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css'],
})
export class OrderEditComponent implements OnInit {
  selectedRow: any;
  orderEditForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private service: OrderListService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.selectedRow = this.service.ordersArray[param['id']];
      console.log(this.selectedRow);
      this.createForm();
      this.setValuesToForm();
    });
  }
  createForm() {
    this.orderEditForm = this.fb.group({
      itemName: '',
      price: '',
      totalPrice: '',
      custName: '',
      address: '',
    });
  }
  setValuesToForm() {
    this.orderEditForm.controls.custName.setValue(this.selectedRow.custName);
    this.orderEditForm.controls.itemName.setValue(this.selectedRow.itemName);
    this.orderEditForm.controls.price.setValue(this.selectedRow.amt / this.selectedRow.noOfItems);
    this.orderEditForm.controls.totalPrice.setValue(
      this.selectedRow.amt
    );
    this.orderEditForm.controls.address.setValue(this.selectedRow.address);
  }
}
