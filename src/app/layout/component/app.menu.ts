import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, AppMenuitem, RouterModule],
  template: `<ul class="layout-menu">
    <ng-container *ngFor="let item of model; let i = index">
      <li
        app-menuitem
        *ngIf="!item.separator"
        [item]="item"
        [index]="i"
        [root]="true"
      ></li>
      <li *ngIf="item.separator" class="menu-separator"></li>
    </ng-container>
  </ul> `,
})
export class AppMenu {
  model: MenuItem[] = [];

  ngOnInit() {
    this.model = [
      {
        label: 'Panel Principal',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
          {
            label: 'Gestión de Clientes',
            icon: 'pi pi-fw pi-users',
            routerLink: ['/pages/crudclients'],
          },
        ],
      },

      {
        label: 'Páginas',
        icon: 'pi pi-fw pi-briefcase',
        routerLink: ['/pages'],
        items: [
          {
            label: 'Autentificación',
            icon: 'pi pi-fw pi-user',
            items: [
              {
                label: 'Inicio de sesión',
                icon: 'pi pi-fw pi-sign-in',
                routerLink: ['/auth/login'],
              },
              {
                label: 'Acceso denegado',
                icon: 'pi pi-fw pi-lock',
                routerLink: ['/auth/access'],
              },
              {
                label: 'Error',
                icon: 'pi pi-fw pi-times-circle',
                routerLink: ['/auth/error'],
              },
            ],
          },
          {
            label: 'Not Found',
            icon: 'pi pi-fw pi-exclamation-circle',
            routerLink: ['/pages/notfound'],
          },
          {
            label: 'Página vacía',
            icon: 'pi pi-fw pi-circle-off',
            routerLink: ['/pages/empty'],
          },
        ],
      },
      {
        label: 'Jerarquia',
        items: [
          {
            label: 'Submenu 1',
            icon: 'pi pi-fw pi-bookmark',
            items: [
              {
                label: 'Submenu 1.1',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                  { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                  { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                  { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
                ],
              },
              {
                label: 'Submenu 1.2',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                  { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' },
                ],
              },
            ],
          },
          {
            label: 'Submenu 2',
            icon: 'pi pi-fw pi-bookmark',
            items: [
              {
                label: 'Submenu 2.1',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                  { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                  { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
                ],
              },
              {
                label: 'Submenu 2.2',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                  { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
                ],
              },
            ],
          },
        ],
      },
      {
        label: 'Documentación',
        items: [
          {
            label: 'Ver Fuente',
            icon: 'pi pi-fw pi-github',
            url: 'https://github.com/alexanderbaes/angular-tech-test',
            target: '_blank',
          },
        ],
      },
    ];
  }
}
