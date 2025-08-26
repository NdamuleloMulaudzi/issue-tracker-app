import { Injectable } from '@angular/core';
import { Issue } from '../interface/issue.interface';
import { v4 as uuid } from 'uuid';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  constructor() {
    this.loadIssues()
  }
  issues: Issue[] = [];
  private issuesSubject = new BehaviorSubject<Issue[]>([]);

  issues$ = this.issuesSubject.asObservable();

  saveIssue(): void {
    localStorage.setItem('issues', JSON.stringify(this.issues));
    this.issuesSubject.next(this.issues);
  }

   loadIssues(): void {
    const raw = localStorage.getItem('issues')
    this.issues = raw ? JSON.parse(raw) : [];
    this.issuesSubject.next(this.issues);

  }

  addIssue(title: string, description: string, priority: Issue['priority']) {
    const newIssue: Issue = {
      id: uuid(),
      title,
      description,
      status: 'Open',
      priority,
      createdDate: new Date(),
    };
    this.issues.push(newIssue);
    this.saveIssue();
  }

  getIssues():Issue[] {
    return [...this.issues];
  }

  updateStatus(id: string, newStatus: Issue['status']): void {
    const index = this.issues.findIndex(issue => issue.id === id);
    if (index !== -1) {
      this.issues[index].status = newStatus;
      this.saveIssue();
    }
  }
}
