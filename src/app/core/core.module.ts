import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { storageServiceProvider } from './storage.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AsideComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    storageServiceProvider
  ],
  exports: [
    HeaderComponent,
    FooterComponent, 
    AsideComponent
  ]
})
export class CoreModule { }
