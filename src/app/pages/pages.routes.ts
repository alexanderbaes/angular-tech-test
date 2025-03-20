import { Routes } from '@angular/router';
import { CrudClients } from './crudclients/crudclients';
import { Empty } from './empty/empty';

export default [
    { path: 'crudclients', component: CrudClients },
    { path: 'empty', component: Empty },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
