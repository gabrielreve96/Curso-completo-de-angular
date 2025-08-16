import { DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-pipes-actual-date-pages',
  imports: [DatePipe],
  templateUrl: './pipes-actual-date-pages.html',
  styleUrl: './pipes-actual-date-pages.css'
})
export class PipesActualDatePages {
constumDate = signal(new Date())
fechaEnvio = signal(new Date());
}
