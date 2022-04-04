import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [ //za da polzwame autocmplition ot typescript
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
      },
      {
        path: 'home',
        component: HomeComponent,
        data: {
          title: 'HOME'
        }
      },
    {
        path: '**',
        component: NotFoundComponent
    }
]; 

export const AppRoutingModule = RouterModule.forRoot(routes); // za da se sloji tozi ryter service w nashiq app i da go polzwame nawsqkude