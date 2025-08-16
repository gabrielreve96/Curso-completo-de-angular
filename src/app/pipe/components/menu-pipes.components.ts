import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'menu-pipes',
    templateUrl: 'menu-pipes.component.html',
    standalone: true,
    imports: [RouterLink]
})

export class MenuPipesComponent implements OnInit {
    constructor() { }
     

    public rutasPipes = [
        {title:"pipe de texto", url:"/pipes/text"},
        {title:"pipe de fecha", url:"/pipes/date"},
        {title:"pipe de moneda", url:"/pipes/currency"}
    ]
    ngOnInit() { }
}