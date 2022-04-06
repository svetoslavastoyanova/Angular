import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../../../core/post.service';
import { IPost } from '../../../core/interfaces';
;

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() themeId: string;

  postList: IPost[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.loadPostList(this.themeId, 5).subscribe(postList => {
      this.postList = postList;
    });
  }

}
