import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


const httpOptions={
    headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
};

@Injectable()
export class PaymentService{
    constructor(private http:HttpClient){}

    private userUrl='http://localhost:5000/capstore';

    userID=15;
    public sendData(paymentMethod: any) {
        console.log(paymentMethod)
        return this.http.put(this.userUrl + "/payment/"+paymentMethod+"/"+this.userID,paymentMethod);
    }
    


}