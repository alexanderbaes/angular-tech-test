import { Routes } from '@angular/router';
import { AppLayout } from './layout/component/app.layout';
import { Notfound } from './pages/notfound/notfound';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    component: AppLayout,
    children: [
      { path: '', component: Dashboard },
      { path: 'pages', loadChildren: () => import('./pages/pages.routes') },
    ],
  },
  { path: 'notfound', component: Notfound },
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.routes') },
  { path: '**', redirectTo: '/notfound' },
];
