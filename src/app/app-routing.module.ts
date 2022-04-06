import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./feature/pages/home-page/home-page.component";
import { NotFoundPageComponent } from "./feature/pages/not-found-page/not-found-page.component";

const routes: Routes = [
    {
        path:'',
        pathMatch: 'full', //prowerkata da bude pulna. napr ako imame ''/
        redirectTo: 'home' // ako nqkoi otide na prazen put
    },
    {
        path: 'home',
        component: HomePageComponent // kogato nqkoi stigne do home, da s epokaje home componentata
    },
    {
        path: '**', 
        component: NotFoundPageComponent // kogato ne moga da matchna nito edin ot putishtata
    }
 ];

export const AppRoutingModule = RouterModule.forRoot(routes); // polzwa se wednuj na nai-swisoka instanciq, ostanalite sa sus forChild