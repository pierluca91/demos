import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { AnagraficaComponent } from './components/anagrafica/anagrafica.component';
import { AnagraficaService } from './components/anagrafica/anagrafica.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, AnagraficaComponent],
  providers: [AnagraficaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
