import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarraNavComponent } from './barra-nav/barra-nav.component';
import { C2Component } from './c2/c2.component';
import { FooterComponent } from './footer/footer.component';
import { GalSerComponent } from './gal-ser/gal-ser.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { PromocionesComponent } from './promociones/promociones.component';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavComponent,
    C2Component,
    FooterComponent,
    GalSerComponent,
    PromocionesComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
