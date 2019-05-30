import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablePrimeNgComponent } from './table-ng/table-prime-ng/table-prime-ng.component';
import { DateEXPPipe } from './date-exp.pipe';



@NgModule({
  declarations: [
    AppComponent,
    TablePrimeNgComponent,
    DateEXPPipe
  ],
  imports: [
    BrowserModule,
    TableModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
