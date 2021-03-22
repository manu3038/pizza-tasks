import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderListService {
  ordersArray = [
    {
      custName: 'julie',
      noOfItems: '2',
      amt: '222',
      status: 'o',
      itemName: 'chicken pizza',
      address: 'Random Address'
    },
    {
      custName: 'robert',
      noOfItems: '12',
      amt: '333',
      status: 'o',
      itemName: 'egg roll',
      address: 'Random Address'
    },
    {
      custName: 'mark',
      noOfItems: '3',
      amt: '23424',
      status: 'p',
      itemName: 'veg burger',
      address: 'Random Address'
    },

    {
      custName: 'john',
      noOfItems: '4',
      amt: '2432',
      status: 'p',
      itemName: 'juice',
      address: 'Random Address'
    },
    {
      custName: 'kenny',
      noOfItems: '8',
      amt: '6472',
      status: 'r',
      itemName: 'cool drink',
      address: 'Random Address'
    },
    {
      custName: 'khan',
      noOfItems: '4',
      amt: '9356',
      status: 'r',
      itemName: 'french fries',
      address: 'Random Address'
    },
    {
      custName: 'ajay',
      noOfItems: '3',
      amt: '9654',
      status: 'o',
      itemName: 'momos',
      address: 'Random Address'
    },
    {
      custName: 'manu',
      noOfItems: '7',
      amt: '7235',
      status: 'p',
      itemName: 'veg meal',
      address: 'Random Address'
    },
    {
      custName: 'siri',
      noOfItems: '8',
      amt: '3424',
      status: 'p',
      itemName: 'chicken meal',
      address: 'Random Address'
    },

    {
      custName: 'pablo',
      noOfItems: '9',
      amt: '23633',
      status: 'r',
      itemName: 'chicken burger',
      address: 'Random Address'
    },
    {
      custName: 'walter',
      noOfItems: '5',
      amt: '2674',
      status: 'r',
      itemName: 'veg pizza',
      address: 'Random Address'
    },
    {
      custName: 'griffin',
      noOfItems: '2',
      amt: '2355',
      status: 'o',
      itemName: 'cool drink',
      address: 'Random Address'
    },
  ];
  constructor() {}
}
