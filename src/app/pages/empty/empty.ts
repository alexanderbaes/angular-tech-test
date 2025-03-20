import { Component } from '@angular/core';

@Component({
    selector: 'app-empty',
    standalone: true,
    template: ` <div class="card">
        <div class="font-semibold text-xl mb-4">Página vacía</div>
        <p>Utilice esta página para empezar desde cero y colocar su contenido personalizado.</p>
    </div>`
})
export class Empty {}
