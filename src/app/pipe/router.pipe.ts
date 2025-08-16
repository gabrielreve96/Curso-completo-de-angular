import { Routes } from '@angular/router';
import { LayoutPipes } from './layout/layout-pipes/layout-pipes';
import { PipesActualPages } from './pages/pipes-actual-pages/pipes-actual-pages';
import { PipesActualDatePages } from './pages/pipes-actual-date-pages/pipes-actual-date-pages';
import { PipesActualNumbersPages } from './pages/pipes-actual-numbers-pages/pipes-actual-numbers-pages';

const routes: Routes = [
  {
    path: '',
    component: LayoutPipes,
    children: [
      {
        path: 'text',
        component: PipesActualPages
      },
      {
        path:'date',
        component: PipesActualDatePages
      },
      {
        path:'currency',
        component:PipesActualNumbersPages
      }
    ]
  }
];

export default routes;