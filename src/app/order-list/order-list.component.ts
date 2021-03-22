import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormArray } from "@angular/forms";
import { OrderListService } from "./order-list.service";

@Component({
  selector: "app-order-list",
  templateUrl: "./order-list.component.html",
  styleUrls: ["./order-list.component.css"]
})
export class OrderListComponent implements OnInit {
  constructor(private fb: FormBuilder, private service: OrderListService) { }
  prizzaOrdersForm: FormGroup = this.fb.group({
    orderRows: this.fb.array([])
  });
  orderRows: FormArray = this.prizzaOrdersForm.get("orderRows").value;
  statusList = [
    { status: "Order Received", value: "o" },
    { status: "Preparing", value: "p" },
    { status: "Ready to serve", value: "r" }];
  ngOnInit() {
    this.service.ordersArray.forEach(i => {
      this.orderRows.push(this.addOrder());
    });
    this.service.ordersArray.map((e, i) => {
      (this.orderRows[i] as FormGroup).controls.custName.setValue(e.custName);
    });
    console.log((this.orderRows[0] as FormGroup).controls.custName.value);
  }
  addOrder(): FormGroup {
    return this.fb.group({
      custName: "",
      noOfItems: "",
      amt: "",
      status: ""
    });
  }
}