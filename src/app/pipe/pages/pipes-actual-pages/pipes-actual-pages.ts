import { LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-pipes-actual-pages',
  standalone: true,
  imports: [LowerCasePipe,UpperCasePipe],
  templateUrl: './pipes-actual-pages.html',
  styleUrl: './pipes-actual-pages.css'
})
export class PipesActualPages {
  
  public nombre = signal<string>('GABRIEL');
  public apellido = signal<string>('gonzalez');


}
