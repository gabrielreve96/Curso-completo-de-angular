import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuPipesComponent } from '../../components/menu-pipes.components';
@Component({
  selector: 'app-layout-pipes',
  standalone: true,
  imports: [RouterOutlet, MenuPipesComponent],
  templateUrl: './layout-pipes.html',
  styleUrls: ['./layout-pipes.css']
})
export class LayoutPipes {  

}
