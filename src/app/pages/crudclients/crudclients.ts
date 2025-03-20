import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CrudClientService } from '../service/crud-client.service';
import { ApiResponse, User } from '../../core/interfaces/IClient';

interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}

interface FieldErrors {
  firstName: boolean;
  lastName: boolean;
  email: boolean;
}

@Component({
  selector: 'app-crud-clients',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    ToastModule,
    ToolbarModule,
    RatingModule,
    InputTextModule,
    TextareaModule,
    SelectModule,
    RadioButtonModule,
    InputNumberModule,
    DialogModule,
    TagModule,
    InputIconModule,
    IconFieldModule,
    ConfirmDialogModule,
  ],
  template: `
    <p-toolbar styleClass="mb-6">
      <ng-template #start>
        <p-button
          label="Agregar"
          icon="pi pi-plus"
          severity="secondary"
          class="mr-2"
          (onClick)="showAddClientDialog()"
        />
      </ng-template>
    </p-toolbar>

    <p-table
      #dt
      [value]="clients"
      [rows]="10"
      [paginator]="true"
      [tableStyle]="{ 'min-width': '75rem' }"
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
            Nombre
            <p-sortIcon field="firstName" />
          </th>
          <th pSortableColumn="lastName">
            Apellido
            <p-sortIcon field="lastName" />
          </th>
          <th pSortableColumn="email" style="width: 10rem">
            Correo
            <p-sortIcon field="email" />
          </th>
          <th>Acciones</th>
        </tr>
      </ng-template>
      <ng-template #body let-client>
        <tr>
          <td>{{ client.id }}</td>
          <td>{{ client.firstName }}</td>
          <td>{{ client.lastName }}</td>
          <td>{{ client.email }}</td>
          <td>
            <p-button
              icon="pi pi-pencil"
              class="mr-2"
              [rounded]="true"
              [outlined]="true"
              (click)="editClient(client)"
            />
            <p-button
              icon="pi pi-trash"
              severity="danger"
              [rounded]="true"
              [outlined]="true"
              (click)="deleteClient(client.id)"
            />
          </td>
        </tr>
      </ng-template>
    </p-table>

    <p-dialog
      header="Editar Cliente"
      [(visible)]="displayEditDialog"
      [style]="{ width: '450px' }"
      [modal]="true"
    >
      <ng-template #content>
        <div class="flex flex-col gap-6">
          <div>
            <label for="firstName" class="block font-bold mb-3">Nombre</label>
            <input
              id="firstName"
              pInputText
              type="text"
              [(ngModel)]="selectedClient.firstName"
              required
              autofocus
              fluid
            />
            <small class="text-red-500" *ngIf="fieldErrors.firstName"
              >Nombre es requerido.</small
            >
          </div>
          <div>
            <label for="lastName" class="block font-bold mb-3">Apellido</label>
            <input
              id="lastName"
              pInputText
              type="text"
              [(ngModel)]="selectedClient.lastName"
              required
              fluid
            />
            <small class="text-red-500" *ngIf="fieldErrors.lastName"
              >Apellido es requerido.</small
            >
          </div>
          <div>
            <label for="email" class="block font-bold mb-3">Correo</label>
            <input
              id="email"
              pInputText
              [(ngModel)]="selectedClient.email"
              type="text"
              required
              fluid
            />
            <small class="text-red-500" *ngIf="fieldErrors.email"
              >Correo es requerido.</small
            >
          </div>
        </div>
      </ng-template>
      <ng-template #footer>
        <p-button
          label="Cancelar"
          icon="pi pi-times"
          text
          (click)="hideDialog()"
        />
        <p-button label="Guardar" icon="pi pi-check" (click)="saveClient()" />
      </ng-template>
    </p-dialog>

    <p-dialog
      header="Agregar Cliente"
      [(visible)]="displayAddDialog"
      [style]="{ width: '450px' }"
      [modal]="true"
    >
      <ng-template #content>
        <div class="flex flex-col gap-6">
          <div>
            <label for="firstName" class="block font-bold mb-3">Nombre</label>
            <input
              id="firstName"
              pInputText
              type="text"
              [(ngModel)]="newClient.firstName"
              required
              autofocus
              fluid
            />
            <small class="text-red-500" *ngIf="fieldErrors.firstName"
              >Nombre es requerido.</small
            >
          </div>
          <div>
            <label for="lastName" class="block font-bold mb-3">Apellido</label>
            <input
              id="lastName"
              pInputText
              type="text"
              [(ngModel)]="newClient.lastName"
              required
              fluid
            />
            <small class="text-red-500" *ngIf="fieldErrors.lastName"
              >Apellido es requerido.</small
            >
          </div>
          <div>
            <label for="email" class="block font-bold mb-3">Correo</label>
            <input
              id="email"
              pInputText
              [(ngModel)]="newClient.email"
              type="text"
              required
              fluid
            />
            <small class="text-red-500" *ngIf="fieldErrors.email"
              >Correo es requerido.</small
            >
          </div>
        </div>
      </ng-template>

      <ng-template #footer>
        <p-button
          label="Cancelar"
          icon="pi pi-times"
          text
          (click)="hideDialog()"
        />
        <p-button label="Guardar" icon="pi pi-check" (click)="addClient()" />
      </ng-template>
    </p-dialog>

    <p-confirmdialog [style]="{ width: '450px' }" />
    <p-toast></p-toast>
  `,
  providers: [MessageService, CrudClientService, ConfirmationService],
})
export class CrudClients implements OnInit {
  clients: any[] = [];
  selectedClient: any = {};
  displayEditDialog = false;

  displayAddDialog = false;
  newClient: any = {
    firstName: '',
    lastName: '',
    email: '',
  };

  fieldErrors: FieldErrors = {
    firstName: false,
    lastName: false,
    email: false,
  };

  constructor(
    private crudClientService: CrudClientService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.loadClients();
  }

  // Cargar clientes
  loadClients(): void {
    this.crudClientService.getClients().subscribe({
      next: (response) => (this.clients = response.users),
      error: (err) => console.error('Error al cargar clientes:', err),
    });
  }

  // Agregar Cliente
  addClient(): void {
    const requiredFields: Array<keyof FieldErrors> = [
      'firstName',
      'lastName',
      'email',
    ];

    // Validar campos requeridos
    requiredFields.forEach((field) => {
      this.fieldErrors[field] =
        !this.newClient[field] || this.newClient[field].trim() === '';
    });

    // Verificar si existen errores
    if (!Object.values(this.fieldErrors).some((error) => error)) {
      // Si no hay errores, realiza la acción de guardar
      this.crudClientService.addClient(this.newClient).subscribe({
        next: (response) => {
          this.loadClients(); // Refrescar la tabla
          this.displayAddDialog = false;
          console.log('Cliente agregado:', response);
          this.messageService.add({
            severity: 'success',
            summary: 'Éxito!',
            detail: 'Cliente agregado',
            life: 2000,
          });
        },
        error: (err) => console.error('Error al agregar cliente:', err),
      });
    }
  }

  // Editar Cliente
  editClient(client: any): void {
    this.selectedClient = { ...client };
    this.displayEditDialog = true;
  }

  // Guardar Cliente editado (PUT)
  saveClient(): void {
    const requiredFields: Array<keyof FieldErrors> = [
      'firstName',
      'lastName',
      'email',
    ];

    // Validar campos requeridos
    requiredFields.forEach((field) => {
      this.fieldErrors[field] =
        !this.selectedClient[field] || this.selectedClient[field].trim() === '';
    });

    // Verificar si existen errores
    if (!Object.values(this.fieldErrors).some((error) => error)) {
      // Si no hay errores, realiza la acción de guardar
      this.crudClientService
        .updateClient(this.selectedClient.id, this.selectedClient)
        .subscribe({
          next: (response) => {
            this.loadClients(); // Refrescar tabla
            this.displayEditDialog = false;
            console.log('Cliente actualizado:', response);
            this.messageService.add({
              severity: 'success',
              summary: 'Éxito!',
              detail: 'Cliente actualizado',
              life: 2000,
            });
          },
          error: (err) => console.error('Error al actualizar cliente:', err),
        });
    }
  }

  // Eliminar Cliente
  deleteClient(id: number): void {
    this.confirmationService.confirm({
      message: '¿Estás seguro de que quieres borrar este cliente?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.crudClientService.deleteClient(id).subscribe({
          next: () => {
            this.loadClients(); // Refrescar tabla
            console.log('Cliente eliminado');
          },
          error: (err) => console.error('Error al eliminar cliente:', err),
        });

        this.messageService.add({
          severity: 'success',
          summary: 'Éxito!',
          detail: 'Cliente eliminado',
          life: 2000,
        });
      },
    });
  }

  //Abrir modal para agregar
  showAddClientDialog(): void {
    this.newClient = {
      firstName: '',
      lastName: '',
      email: '',
    };
    this.displayAddDialog = true;
  }

  //Cerrar Modal
  hideDialog() {
    this.displayAddDialog = false;
    this.displayEditDialog = false;
    this.fieldErrors = {
      firstName: false,
      lastName: false,
      email: false,
    };
  }
}
