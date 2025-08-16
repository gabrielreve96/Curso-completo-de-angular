import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'pipe',
        loadChildren: () => import('./pipe/router.pipe').then(m => m.default)
    }
];
