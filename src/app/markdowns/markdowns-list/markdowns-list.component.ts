import { Component, OnInit } from '@angular/core';

import { MarkdownService } from '../shared/markdown.service';

import { Markdown } from '../shared/markdown';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'markdowns-list',
  templateUrl: './markdowns-list.component.html',
  styleUrls: ['./markdowns-list.component.scss'],
})
export class MarkdownsListComponent implements OnInit {

  markdowns: Observable<Markdown[]>;
  showSpinner = true;

  constructor(private markdownService: MarkdownService) {
    this.markdowns = this.markdownService.getMarkdownsList();
  }

  ngOnInit() {
    this.markdowns.subscribe((x) => {
      this.showSpinner = false;
    });
  }

  deleteMarkdowns() {
    this.markdownService.deleteAll();
  }
}
