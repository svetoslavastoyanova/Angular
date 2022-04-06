import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/core/guards/auth.guard";
import { ThemeDetailPageComponent } from "./theme-detail-page/theme-detail-page.component";
import { ThemeNewPageComponent } from "./theme-new-page/theme-new-page.component";
import { ThemesPageComponent } from "./themes-page/themes-page.component";

const routes: Routes = [
    {
        path: 'themes',
        component: ThemesPageComponent,
    },
    {
        path: 'themes/new',
        canActivate: [AuthGuard], // predi da nawigira da proweri guard-a
        component: ThemeNewPageComponent, // purwo trqbwa towa za da ne s eoburkwat putishtata
    },
    {
        path: 'themes/:themeId',
        component: ThemeDetailPageComponent,
    }
    
];

export const ThemesRoutingModule = RouterModule.forChild(routes);