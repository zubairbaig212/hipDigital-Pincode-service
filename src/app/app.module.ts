import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullComponent } from './layouts/full/full.component';
import { DemoFlexyModule } from './demo-flexy-module'

// Modules
import { CreatePinCodeSerialComponent } from './component/create-pincode-serial/create-pincode-serial.component';
import { ActivatePincodeComponent } from './component/activate-pincode/activate-pincode.component';
import { GetPincodeListComponent } from './component/get-pincode-list/get-pincode-list.component';
import { UpdatePincodeComponent } from './component/get-pincode-list/update-pincode/update-pincode.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { PincodeDetailComponent } from './component/pincode-detail/pincode-detail.component';
import { CustomPincodeComponent } from './component/custom-pincode/custom-pincode.component';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    CreatePinCodeSerialComponent,
    ActivatePincodeComponent,
    GetPincodeListComponent,
    UpdatePincodeComponent,
    PincodeDetailComponent,
    CustomPincodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FeatherModule.pick(allIcons),
    DemoFlexyModule,
    FormsModule,
    FontAwesomeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
