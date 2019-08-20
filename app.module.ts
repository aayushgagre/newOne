import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { PaymentService } from './payment.service';
import {FormsModule} from '@angular/forms'

const routes=[
    {path:'',component:AppComponent}

]
@NgModule({
    imports: [
        BrowserModule,HttpClientModule,RouterModule.forRoot(routes),FormsModule
        
    ],
    declarations: [
        AppComponent
		],
    providers: [PaymentService ],
    bootstrap: [AppComponent]
})

export class AppModule { }