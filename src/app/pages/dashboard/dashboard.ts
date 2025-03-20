import { Component } from '@angular/core';
import { StatsWidget } from './components/statswidget';
import { UserRolesWidget } from './components/userroleswidget';
import { RevenueStreamWidget } from './components/revenuestreamwidget';

@Component({
    selector: 'app-dashboard',
    imports: [StatsWidget, UserRolesWidget, RevenueStreamWidget],
    template: `
        <div class="grid grid-cols-12 gap-8">
            <app-stats-widget class="contents" />
            <div class="col-span-12">
                <app-user-roles-widget />
            </div>
            <div class="col-span-12">
                <app-revenue-stream-widget />
            </div>
        </div>
    `
})
export class Dashboard {}
