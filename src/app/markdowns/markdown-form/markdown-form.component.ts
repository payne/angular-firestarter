import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Markdown } from '../shared/markdown';

import { MarkdownService } from '../shared/markdown.service';

@Component({
  selector: 'markdown-form',
  templateUrl: './markdown-form.component.html',
  styleUrls: ['./markdown-form.component.scss'],
})
export class MarkdownFormComponent {

  markdown: Markdown = new Markdown();

  constructor(private markdownSvc: MarkdownService) { }
  createMarkdown() {
    this.markdownSvc.createMarkdown(this.markdown);
    this.markdown = new Markdown(); // reset markdown
  }
}
