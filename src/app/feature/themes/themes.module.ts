import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from 'src/app/aside/aside.component';
import { PostListComponent } from './post-list/post-list.component';
import { ThemeListItemComponent } from './theme-list-item/theme-list-item.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemesPageComponent } from './themes-page/themes-page.component';
import { ThemesRoutingModule } from './theme-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ThemeDetailPageComponent } from './theme-detail-page/theme-detail-page.component';
import { ThemeNewPageComponent } from './theme-new-page/theme-new-page.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ThemeListComponent,
    AsideComponent,
    ThemeListItemComponent,
    PostListComponent,
    ThemesPageComponent,
    ThemeDetailPageComponent,
    ThemeNewPageComponent
  ],
  imports: [
    CommonModule,
    ThemesRoutingModule,
    SharedModule,
    FormsModule
  ],
  
})
export class ThemesModule { }
