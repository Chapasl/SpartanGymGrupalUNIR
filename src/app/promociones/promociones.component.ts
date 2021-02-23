import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {

  constructor() { }
  moferta = true;
  ofnumero = 0;
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  MostrarOferta($event){
    this.moferta = ! this.moferta;
  }
  // tslint:disable-next-line:typedef
  compraof1($event){
    this.ofnumero = 1;
  }
  // tslint:disable-next-line:typedef
  compraof2($event){
    this.ofnumero = 2;
  }
  // tslint:disable-next-line:typedef
  compraof3($event){
    this.ofnumero = 3;
  }
}
