import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireDatabaseModule } from 'angularfire2/database';

import { SharedModule } from '../../shared/shared.module';

import { MarkdownService } from './markdown.service';

import { MarkdownsListComponent } from '../markdowns-list/markdowns-list.component';
import { MarkdownFormComponent } from '../markdown-form/markdown-form.component';
import { MarkdownDetailComponent } from '../markdown-detail/markdown-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireDatabaseModule,
  ],
  declarations: [
    MarkdownsListComponent,
    MarkdownFormComponent,
    MarkdownDetailComponent,
  ],
  providers: [
    MarkdownService,
  ],
})
export class MarkdownModule { }
