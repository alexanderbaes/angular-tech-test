import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudClientService } from '../../service/crud-client.service';

@Component({
  standalone: true,
  selector: 'app-stats-widget',
  imports: [CommonModule],
  template: `
    <!-- Total de Usuarios -->
    <div class="col-span-12 lg:col-span-6 xl:col-span-3">
      <div class="card mb-0">
        <div class="flex justify-between mb-4">
          <div>
            <span class="block text-muted-color font-medium mb-4"
              >Usuarios Totales</span
            >
            <div
              class="text-surface-900 dark:text-surface-0 font-medium text-xl"
            >
              {{ totalUsers }}
            </div>
          </div>
          <div
            class="flex items-center justify-center bg-blue-100 rounded-border"
            style="width: 2.5rem; height: 2.5rem"
          >
            <i class="pi pi-users text-blue-500 !text-xl"></i>
          </div>
        </div>
        <span class="text-primary font-medium">+{{ newlyRegistered }}</span> 
        <span class="text-muted-color"> registrados</span>
      </div>
    </div>

    <!-- Usuarios Femeninos -->
    <div class="col-span-12 lg:col-span-6 xl:col-span-3">
      <div class="card mb-0">
        <div class="flex justify-between mb-4">
          <div>
            <span class="block text-muted-color font-medium mb-4"
              >Usuarios fem <span class="text-pink-500">♀</span></span
            >
            <div
              class="text-surface-900 dark:text-surface-0 font-medium text-xl"
            >
              {{ femaleUsers }}
            </div>
          </div>
          <div
            class="flex items-center justify-center bg-pink-100 rounded-border"
            style="width: 2.5rem; height: 2.5rem"
          >
            <i class="pi pi-user text-pink-500 !text-xl"></i>
          </div>
        </div>
        <span class="text-muted-color">Del total</span>
      </div>
    </div>

    <!-- Usuarios Administradores -->
    <div class="col-span-12 lg:col-span-6 xl:col-span-3">
      <div class="card mb-0">
        <div class="flex justify-between mb-4">
          <div>
            <span class="block text-muted-color font-medium mb-4"
              >Administradores</span
            >
            <div
              class="text-surface-900 dark:text-surface-0 font-medium text-xl"
            >
              {{ adminUsers }}
            </div>
          </div>
          <div
            class="flex items-center justify-center bg-green-100 rounded-border"
            style="width: 2.5rem; height: 2.5rem"
          >
            <i class="pi pi-shield text-green-500 !text-xl"></i>
          </div>
        </div>
        <span class="text-muted-color">Actualmente activos</span>
      </div>
    </div>

    <!-- Usuarios Masculinos -->
    <div class="col-span-12 lg:col-span-6 xl:col-span-3">
      <div class="card mb-0">
        <div class="flex justify-between mb-4">
          <div>
            <span class="block text-muted-color font-medium mb-4">
              Usuarios Masc <span class="text-cyan-500">♂</span>
            </span>
            <div
              class="text-surface-900 dark:text-surface-0 font-medium text-xl"
            >
              {{ maleUsers }}
            </div>
          </div>
          <div
            class="flex items-center justify-center bg-cyan-100 rounded-border"
            style="width: 2.5rem; height: 2.5rem"
          >
            <i class="pi pi-user text-cyan-500 !text-xl"></i>
          </div>
        </div>
        <span class="text-muted-color">Del total</span>
      </div>
    </div>
  `,
  providers: [CrudClientService],
})
export class StatsWidget {
  users: any[] = [];

  totalUsers: number = 0;
  femaleUsers: number = 0;
  maleUsers: number = 0;
  adminUsers: number = 0;
  newlyRegistered: number = 24; //esto lo agregue porque no tenia esta informacion

  constructor(private crudClientService: CrudClientService) {}

  ngOnInit() {
    this.crudClientService.getClients().subscribe({
      next: (response) => {
        this.users = response.users;

        // Calcular estadísticas
        this.totalUsers = this.users.length;
        this.femaleUsers = this.users.filter(
          (user) => user.gender === 'female'
        ).length;
        this.maleUsers = this.users.filter(
          (user) => user.gender === 'male'
        ).length;
        this.adminUsers = this.users.filter(
          (user) => user.role === 'admin'
        ).length;
      },
      error: (err) => console.error('Error al cargar clientes:', err),
    });
  }
}
