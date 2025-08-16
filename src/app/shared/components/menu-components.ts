import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'menu-item',
    templateUrl: './menu-components.html',
    imports: [CommonModule, RouterLink],
    standalone: true
})

export class MenuComponent implements OnInit {
    constructor() { }

    public rutas = [
        {
            title:"pipe",
            url:"/pipe"
        },
        {
            title:"form",
            url:"/form"
        },
        {
            title:"http",
            url:"/http"
        },
        {
            title:"rxjs",
            url:"/rxjs"
        }
    ]

    ngOnInit() { }
}