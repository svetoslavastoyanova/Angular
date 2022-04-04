import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { NewComponent } from './new/new.component';
import { ThemeListComponent } from './theme-list/theme-list.component';

const routes: Routes = [
    {
        path: 'theme',
        pathMatch: 'full', // za da ne se hwashta wuw wsichki putishta
        redirectTo: 'theme/list' // kogato nqkoi iska da wlezne w theme da go redirectne kum theme list
    },
    {
        path: 'theme/list',
        component: ThemeListComponent
    },
    {
        path: 'theme/detail/:id',
        component: DetailComponent

    },
    {
        path: 'theme/new',
        component: NewComponent
    }
];

export const ThemeRouterModule = RouterModule.forChild(routes);