import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'menu-pipes',
    templateUrl: 'menu-pipes.component.html',
    standalone: true,
    imports: [RouterLink , RouterLinkActive]
})

export class MenuPipesComponent implements OnInit {
    constructor() { }
     

    public rutasPipes = [
        {title:"pipe de texto", url:"text"},
        {title:"pipe de fecha", url:"date"},
        {title:"pipe de moneda", url:"currency"}
    ]
    ngOnInit() { }
}