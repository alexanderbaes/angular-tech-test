import { Component } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { CrudClientService } from '../../service/crud-client.service';

@Component({
  standalone: true,
  selector: 'app-user-roles-widget',
  imports: [CommonModule, TableModule, ButtonModule, RippleModule],
  template: `<div class="card !mb-8">
    <div class="font-semibold text-xl mb-4">Roles de usuarios</div>
    <p-table
      #dt
      [value]="users"
      [paginator]="true"
      [rows]="10"
      responsiveLayout="scroll"
      [rowHover]="true"
      dataKey="id"
      currentPageReportTemplate="Mostrando de {first} a {last} de {totalRecords} Clientes"
      [showCurrentPageReport]="true"
      [rowsPerPageOptions]="[10, 20, 30]"
    >
      <ng-template #header>
        <tr>
          <th>#</th>
          <th pSortableColumn="firstName">
            Nombre <p-sortIcon field="firstName"></p-sortIcon>
          </th>
          <th pSortableColumn="email">
            Correo <p-sortIcon field="email"></p-sortIcon>
          </th>
          <th pSortableColumn="role">
            Rol <p-sortIcon field="role"></p-sortIcon>
          </th>
        </tr>
      </ng-template>
      <ng-template #body let-user>
        <tr>
          <td>{{ user.id }}</td>
          <td style="width: 35%; min-width: 7rem;">{{ user.firstName }}</td>
          <td style="width: 35%; min-width: 8rem;">
            {{ user.email }}
          </td>
          <td style="width: 35%; min-width: 7rem;">{{ user.role }}</td>
        </tr>
      </ng-template>
    </p-table>
  </div>`,
  providers: [CrudClientService],
})
export class UserRolesWidget {
  users: any[] = [];

  constructor(private crudClientService: CrudClientService) {}

  ngOnInit() {
    this.crudClientService.getClients().subscribe({
      next: (response) => (this.users = response.users),
      error: (err) => console.error('Error al cargar clientes:', err),
    });
  }
}
