import { CurrencyPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-pipes-actual-numbers-pages',
  imports: [PercentPipe, CurrencyPipe],
  templateUrl: './pipes-actual-numbers-pages.html',
  styleUrl: './pipes-actual-numbers-pages.css',
  standalone: true
})
export class PipesActualNumbersPages {

  descuento =signal<  number>(0.15);
  precio = signal<number>(2_433_232_5567);
  porcentajeVentas = signal<number>(0.25);
  precioFinal = signal<number>(this.precio() - (this.precio() * this.descuento()));
  moneda = signal<string>('');

public formatoSegunPais =[
  {
    pais:'Argentina',
    formato: 'AR$',
  },
  {
    pais:'Estados Unidos',
    formato: 'US$',
  },
  {
    pais:'Europa',
    formato: '€',
  },
  {
    pais:'Chile',
    formato: 'CL$',
  },
  {
    pais:'Colombia',
    formato: 'CO$',
  },
  {
    pais:'Perú',
    formato: 'S/.',
  }
]

}
