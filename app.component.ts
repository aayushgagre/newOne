import { Component } from '@angular/core';
import{PaymentService} from './payment.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent {
    PaymentService: any;
    constructor(private router: Router, private paymentService: PaymentService){}

    payStore:any;
  
    addData(){
        this.paymentService.sendData(this.payStore).subscribe();
        
    }



 }