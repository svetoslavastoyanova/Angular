import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './post.service';


@NgModule({
  declarations: [
    PostListComponent
  ],
  providers:[
    PostService
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PostListComponent
  ]
})
export class PostModule { }
