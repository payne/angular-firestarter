import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';

import { Markdown } from './markdown';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class MarkdownService {

  private basePath = '/markdowns';

  markdownsRef: AngularFireList<Markdown>;
  markdownRef:  AngularFireObject<Markdown>;

  constructor(private db: AngularFireDatabase) {
    this.markdownsRef = db.list('/markdowns');
  }

  // Return an observable list of Markdowns
  getMarkdownsList(): Observable<Markdown[]> {
    return this.markdownsRef.snapshotChanges().map((arr) => {
      return arr.map((snap) => Object.assign(snap.payload.val(), { $key: snap.key }) );
    });
  }

  // Return a single observable markdown
  getMarkdown(key: string): Observable<Markdown | null> {
    const markdownPath = `${this.basePath}/${key}`;
    const markdown = this.db.object(markdownPath).valueChanges() as Observable<Markdown | null>;
    return markdown;
  }

  // Create a brand new markdown
  createMarkdown(markdown: Markdown): void {
    this.markdownsRef.push(markdown);
  }

  // Update an exisiting markdown
  updateMarkdown(key: string, value: any): void {
    this.markdownsRef.update(key, value);
  }

  // Deletes a single markdown
  deleteMarkdown(key: string): void {
    this.markdownsRef.remove(key);
  }

  // Deletes the entire list of markdowns
  deleteAll(): void {
    this.markdownsRef.remove();
  }

  // Default error handling for all actions
  private handleError(error: Error) {
    console.error(error);
  }
}
