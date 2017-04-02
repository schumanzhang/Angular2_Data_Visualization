import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './components/list/list.component';
import { GraphComponent } from './components/graph/graph.component';


const appRoutes: Routes = [
    {
        path: '',
        component: ListComponent
    },
    {
        path: 'graph',
        component: GraphComponent
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);