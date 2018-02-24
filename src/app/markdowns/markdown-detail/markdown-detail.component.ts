import { Component, Input } from '@angular/core';
import { MarkdownService } from '../shared/markdown.service';
import { Markdown } from '../shared/markdown';

@Component({
  selector: 'markdown-detail',
  templateUrl: './markdown-detail.component.html',
  styleUrls: ['./markdown-detail.component.scss']
})
export class MarkdownDetailComponent {

  @Input() markdown: Markdown;

  constructor(private markdownSvc: MarkdownService) { }

  updateTimeStamp() {
    const date = new Date().getTime();
    this.markdownSvc.updateMarkdown(this.markdown.$key, { timeStamp: date });
  }

  updateActive(value: boolean) {
    this.markdownSvc.updateMarkdown(this.markdown.$key, { active: value });
  }

  deleteMarkdown() {
    this.markdownSvc.deleteMarkdown(this.markdown.$key);
  }

}
