import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderListService {
  ordersArray = [
    {
      custName: "julie",
      noOfItems: "2",
      amt: "222",
      status: "o"
    },
    {
      custName: "robert",
      noOfItems: "12",
      amt: "333",
      status: "o"
    },
    {
      custName: "mark",
      noOfItems: "3",
      amt: "23424",
      status: "p"
    },

    {
      custName: "john",
      noOfItems: "4",
      amt: "2432",
      status: "p"
    },
    {
      custName: "kenny",
      noOfItems: "8",
      amt: "6472",
      status: "r"
    },
    {
      custName: "khan",
      noOfItems: "4",
      amt: "9356",
      status: "r"
    },
    {
      custName: "ajay",
      noOfItems: "3",
      amt: "9654",
      status: "o"
    },
    {
      custName: "manu",
      noOfItems: "7",
      amt: "7235",
      status: "p"
    },
    {
      custName: "siri",
      noOfItems: "8",
      amt: "3424",
      status: "p"
    },

    {
      custName: "pablo",
      noOfItems: "9",
      amt: "23633",
      status: "r"
    },
    {
      custName: "walter",
      noOfItems: "5",
      amt: "2674",
      status: "r"
    },
    {
      custName: "griffin",
      noOfItems: "2",
      amt: "2355",
      status: "o"
    }
  ];
  constructor() { }
}
