import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AppFloatingConfigurator } from '../../layout/component/app.floatingconfigurator';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [RouterModule, AppFloatingConfigurator, ButtonModule],
  template: ` <app-floating-configurator />
    <div class="flex items-center justify-center min-h-screen overflow-hidden">
      <div class="flex flex-col items-center justify-center">
        <div
          style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, color-mix(in srgb, var(--primary-color), transparent 60%) 10%, var(--surface-ground) 30%)"
        >
          <div
            class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20 flex flex-col items-center"
            style="border-radius: 53px"
          >
            <span class="text-primary font-bold text-3xl">404</span>
            <h1
              class="text-surface-900 dark:text-surface-0 font-bold text-3xl lg:text-5xl mb-2"
            >
              Not Found
            </h1>
            <div class="text-surface-600 dark:text-surface-200 mb-8">
              El recurso solicitado no está disponible.
            </div>
            <a
              routerLink="/"
              class="w-full flex items-center mb-8 py-8 border-surface-300 dark:border-surface-500 border-b"
            >
              <span
                class="flex justify-center items-center border-2 border-primary text-primary rounded-border"
                style="height: 3.5rem; width: 3.5rem"
              >
                <i class="pi pi-fw pi-unlock !text-2xl"></i>
              </span>
              <span class="ml-6 flex flex-col">
                <span
                  class="text-surface-900 dark:text-surface-0 lg:text-xl font-medium mb-0"
                  >Gestor de permisos</span
                >
                <span class="text-surface-600 dark:text-surface-200 lg:text-xl"
                  >Gestiona los permisos de los usuarios</span
                >
              </span>
            </a>
            <p-button label="Go to Dashboard" routerLink="/" />
          </div>
        </div>
      </div>
    </div>`,
})
export class Notfound {}
