import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
// import { AccountsService } from './accounts.service';
import { LoggingService } from './logging.service';


@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  /* with this, the whole app receives the same instance of the service */
  /* providers: [AccountsServe, LoggingService], here are service classes,
   not needed if using @Injectable({providedIn: 'root'}) */
  providers: [LoggingService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
